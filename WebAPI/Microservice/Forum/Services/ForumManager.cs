using Forum.Models;
using MongoDBAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forum.Services
{
    public interface IForumManager
    {

    }

    public class ForumManager : IForumManager
    {
        private readonly IMongoDBContext<ForumObj> Context;

        public ForumManager(IMongoDBContext<ForumObj> c)
        {
            this.Context = c;
        }

        //GET PUT POST ...
    }
}
