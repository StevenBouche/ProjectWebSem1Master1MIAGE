using MongoDBAccess;

namespace Restaurant.DataAccess
{
    public interface IRestaurantsDatabaseSetting : IDatabaseSettings
    {
        string RestaurantsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
