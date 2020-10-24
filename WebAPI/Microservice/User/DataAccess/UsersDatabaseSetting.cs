using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace User.DataAccess
{
    public class UsersDatabaseSetting : IUsersDatabaseSetting
    {
        public string UsersCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }

        public string GetCollectionName()
        {
            return this.UsersCollectionName;
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
