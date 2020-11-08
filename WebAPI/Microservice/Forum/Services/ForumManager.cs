using AuthMiddleware;
using Forum.Models;
using Forum.Models.View;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDBAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forum.Services
{
    public interface IForumManager
    {
        ForumObj GetForumById(string id);
        void AddChannelForum(string idForum, Channel channel, UserIdentity identity);
        void GetForumAndChannel(string idChannel, out ForumObj forum, out Channel channel, UserIdentity user);
        void UserConnected(string v);
        void UserDisconnected(string v);
    }

    public interface IForumManagerView
    {
        ForumView CreateForum(ForumForm value, UserIdentity iD);
        ForumSearchView SearchForums(ForumSearchView search, UserIdentity iD);
        string UserSubscribe(string idForum, UserIdentity iD);
        List<ForumView> GetForumsOfUser(UserIdentity identity);
        ForumPanelView GetForumPanel(string id, UserIdentity identity);
    }

    public class ForumManager : IForumManager, IForumManagerView
    {
        private readonly IMongoDBContext<ForumObj> Context;
        private readonly CacheUserWs Cache;

        public ForumManager(IMongoDBContext<ForumObj> c, CacheUserWs cache)
        {
            this.Context = c;
            this.Cache = cache;
        }

        public ForumView CreateForum(ForumForm value, UserIdentity identity)
        {
            var forum = new ForumObj
            {
                Name = value.Name,
                UrlPicture = value.Image,
                Description = value.Description,
                Channels = new List<Channel>(),
                Users = new List<User>(),
            };

            //todo change

            forum.Users.Add(new User
            {
                Id = identity.ID,
                Pseudo = identity.Pseudo,
                UrlPicture = "http://localhost:7000/account/picture/" + identity.ID
            });


            this.Context.GetCollection().InsertOne(forum);

            return forum.ToViewForum();

        }

        public void AddChannelForum(string idForum, Channel channel, UserIdentity identity)
        {
            ForumObj forum = this.GetForumById(idForum);

            if (forum == null) return;

            if (forum.Users.Any(User => User.Id == identity.ID))
            {
                channel.Id = ObjectId.GenerateNewId().ToString();
                forum.Channels.Add(channel);
                this.Context.GetCollection().ReplaceOne(acc => acc.Id.Equals(forum.Id), forum);
            }
        }

        public List<ForumView> GetForumsOfUser(UserIdentity identity)
        {
            return this.Context.GetQueryable()
                .Where(forum => forum.Users.Where(user => user.Id == identity.ID).Any())
                .ToList()
                .Select(forum => forum.ToViewForum())
                .ToList();
        }

        public ForumSearchView SearchForums(ForumSearchView search, UserIdentity iD)
        {
            if(this.Context.GetQueryable().Count() >= 0)
            {

                List<ForumObj> forums = this.Context.GetQueryable().ToList();

                forums.ForEach(forum =>
                {
                    forum.Users.ForEach(user =>
                    {
                        user.IsConnected = this.Cache.usersIdWebSocket.Values.Contains(user.Id);
                    });
                });

                search.ForumSearch = forums.Select(element => new ForumView
                {
                    Id = element.Id,
                    Name = element.Name,
                    Description = element.Description,
                    UrlPicture = element.UrlPicture,
                    NbMember = element.Users.Count,
                    NbOnline = element.Users.Where(user => user.IsConnected).Count()
                }).ToList();

                 
                    /*search.ForumSearch = this.Context.GetQueryable().Select(forum => new {
                        forum.Id,
                        forum.Name,
                        forum.Description,
                        forum.UrlPicture,
                        forum.Users
                    })
                .ToList()
                .Select(element => new ForumView
                {
                    Id = element.Id,
                    Name = element.Name,
                    Description = element.Description,
                    UrlPicture = element.UrlPicture,
                    NbMember = element.Users.Count,
                    NbOnline = element.Users.Where
                }).ToList();*/
                
            }

            return search;
        }

        public string UserSubscribe(string idForum, UserIdentity identity)
        {

            if (String.IsNullOrEmpty(idForum)) return "id forum missing";

            if(String.IsNullOrEmpty(identity.ID)) return "id user missing";

            ForumObj forum = this.GetForumById(idForum);

            if (forum == null) return "forum not found";

            if (forum.Users.Any(User => User.Id == identity.ID)) return "user is already subscribe";

            forum.Users.Add(new User
            {
                Id = identity.ID, 
                Pseudo = identity.Pseudo,
                UrlPicture = identity.UrlPicture
            });

            this.Context.GetCollection().ReplaceOne((f => f.Id == forum.Id), forum);

            return "succes";
        }

        public ForumObj GetForumById(string id)
        {
            return this.Context.GetQueryable().FirstOrDefault(forum => forum.Id.Equals(id));
        }

        public ForumPanelView GetForumPanel(string id, UserIdentity identity)
        {
            ForumObj forum = this.GetForumById(id);

            ForumPanelView panel = new ForumPanelView();

            if (forum == null) return panel;

            panel.Forum = forum.ToViewForum();
            panel.Channels = forum.Channels.Select(channel => channel.ToChannelView()).ToList();
            panel.Users = forum.Users.Select(user => user.ToUserView()).ToList();

            return panel;

        }

        public void GetForumAndChannel(string idChannel, out ForumObj forum, out Channel channel, UserIdentity identity)
        {

            forum = null;
            channel = null;

            ForumObj resForum = this.Context.GetQueryable().FirstOrDefault(forum => forum.Channels.Where(channel => channel.Id == idChannel).Any());

            if (resForum != null)
            {
                if(resForum.Users.Any(user => user.Id == identity.ID))
                {
                    forum = resForum;
                    channel = resForum.Channels.FirstOrDefault(channel => channel.Id == idChannel);
                }
            }
         
        }

        public void UserConnected(string v)
        {
            this.Context.GetQueryable().Where(forum => forum.Users.Where(user => user.Id == v).Any()).ToList();
        }

        public void UserDisconnected(string v)
        {
            throw new NotImplementedException();
        }

        //GET PUT POST ...
    }
}
