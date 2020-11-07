using AuthMiddleware;
using Forum.Models;
using Forum.Models.View;
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

        public ForumSearchView SearchForums(ForumSearchView search, UserIdentity iD)
        {
            throw new NotImplementedException();
        }

        public string UserSubscribe(string idForum, UserIdentity iD)
        {
            throw new NotImplementedException();
        }

        //GET PUT POST ...
    }
}
