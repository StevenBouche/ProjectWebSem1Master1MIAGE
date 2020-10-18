
namespace Restaurant.DataAccess
{
    public class RestaurantDatabaseSetting : IRestaurantsDatabaseSetting
    {

        public string RestaurantsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }

        public string GetCollectionName()
        {
            return this.RestaurantsCollectionName;
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
