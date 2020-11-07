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
        ForumView CreateForum(ForumForm value, string iD);
        ForumSearchView SearchForums(ForumSearchView search, string iD);
        string UserSubscribe(string idForum, string iD);
    }

    public class ForumManager : IForumManager
    {
        private readonly IMongoDBContext<ForumObj> Context;

        public ForumManager(IMongoDBContext<ForumObj> c)
        {
            this.Context = c;
        }

        public ForumView CreateForum(ForumForm value, string iD)
        {
            throw new NotImplementedException();
        }

        public ForumSearchView SearchForums(ForumSearchView search, string iD)
        {
            throw new NotImplementedException();
        }

        public string UserSubscribe(string idForum, string iD)
        {
            throw new NotImplementedException();
        }

        //GET PUT POST ...
    }
}
