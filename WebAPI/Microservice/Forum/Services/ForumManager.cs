using AuthMiddleware;
using Forum.Models;
using Forum.Models.View;
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
        ForumView CreateForum(ForumForm value, UserIdentity iD);
        ForumSearchView SearchForums(ForumSearchView search, UserIdentity iD);
        string UserSubscribe(string idForum, UserIdentity iD);
        List<ForumView> GetForumsOfUser(UserIdentity identity);
    }

    public class ForumManager : IForumManager
    {
        private readonly IMongoDBContext<ForumObj> Context;

        public ForumManager(IMongoDBContext<ForumObj> c)
        {
            this.Context = c;
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
                Pseudo = identity.Email,
                UrlPicture = ""
            });


            this.Context.GetCollection().InsertOne(forum);

            return forum.ToViewForum();

        }

        public void AddChannelForum(string idForum, Channel channel)
        {
            ForumObj forum = this.GetForumById(idForum);

            if (forum == null) return;

            forum.Channels.Add(channel);

            var filter = Builders<ForumObj>.Filter.Eq("_id", idForum);
            var update = Builders<ForumObj>.Update.Set("Channels", forum.Channels);

            this.Context.GetCollection().UpdateOne(filter, update);

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
                search.ForumSearch = this.Context.GetQueryable().Select(forum => new {
                    forum.Name,
                    forum.Description,
                    forum.UrlPicture,
                    forum.Users
                })
            .ToList()
            .Select(element => new ForumView
            {
                Name = element.Name,
                Description = element.Description,
                UrlPicture = element.UrlPicture,
                NbMember = element.Users.Count,
                NbOnline = 0
            }).ToList();
                
            }
            return search;
        }

        public ForumObj GetForumById(string id)
        {
            return this.Context.GetQueryable().FirstOrDefault(forum => forum.Id.Equals(id));
        }

        public string UserSubscribe(string idForum, UserIdentity identity)
        {

            if (string.IsNullOrEmpty(idForum)) return "id forum missing";

            if(string.IsNullOrEmpty(identity.ID)) return "id user missing";

            ForumObj forum = this.GetForumById(idForum);

            if (forum == null) return "forum not found";

            if (forum.Users.Any(User => User.Id == identity.ID)) return "user is already subscribe";

            forum.Users.Add(new User
            {
                Id = identity.ID, 
                Pseudo = identity.Email
            });

            var filter = Builders<ForumObj>.Filter.Eq("_id", idForum);
            var update = Builders<ForumObj>.Update.Set("Users", forum.Users);

            this.Context.GetCollection().UpdateOne(filter, update);

            return "succes";
        }

   

        //GET PUT POST ...
    }
}
