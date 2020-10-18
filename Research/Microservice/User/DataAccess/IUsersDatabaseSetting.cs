using MongoDBAccess;

namespace User.DataAccess
{
    public interface IUsersDatabaseSetting : IDatabaseSettings
    {
        string UsersCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }

    }
}
