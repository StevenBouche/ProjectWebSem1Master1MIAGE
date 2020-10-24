using MongoDBAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forum.DataAccess
{

    public interface IForumDatabaseSetting : IDatabaseSettings
    {
        string ForumCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

    public class ForumDatabaseSetting : IForumDatabaseSetting
    {
        public string ForumCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }

        public string GetCollectionName()
        {
            return this.ForumCollectionName;
        }

        public string GetConnectionString()
        {
            return this.ConnectionString;
        }

        public string GetDatabaseName()
        {
            return this.DatabaseName;
        }
    }
}
