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
            if(this.Context.GetCollection().Count() >= 0)
            {
                search.ForumSearch = this.Context.GetQueryable().Select(forum => new {
                    forum.Name,
                    forum.Description,
                    forum.UrlPicture,
                    forum.Users,
                    NbOnline = 0
                })
            .ToList()
            .Select(element => new ForumView
            {
                Name = element.Name,
                Description = element.Description,
                UrlPicture = element.UrlPicture,
                NbMember = element.Users.Count,
                NbOnline = element.NbOnline
            }).ToList();
                
            }
            return search;
        }

        public string UserSubscribe(string idForum, UserIdentity iD)
        {
            throw new NotImplementedException();
        }

        //GET PUT POST ...
    }
}
