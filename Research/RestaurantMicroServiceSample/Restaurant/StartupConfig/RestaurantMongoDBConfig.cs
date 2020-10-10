using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Restaurant.DataAccess;
using Microsoft.Extensions.Options;
using System;

using Restaurant.Model;
using MongoDBAccess;

namespace Restaurant.StartupConfig
{
    public class RestaurantMongoDBConfig
    {

        public static void ConfigureService(IServiceCollection services, Func<string,IConfigurationSection> config)
        {
            //Load mongodb settings in RestaurantDatabaseSetting where is in appsettings.json with name : RestaurantDatabaseSetting
            services.Configure<RestaurantDatabaseSetting>(config(nameof(RestaurantDatabaseSetting)));
            //Define an interface who serve setting mongodb access
            services.AddSingleton<IRestaurantsDatabaseSetting>(sp => sp.GetRequiredService<IOptions<RestaurantDatabaseSetting>>().Value);
            //Define Restaurant service data access 
            services.AddTransient<IMongoDBContext<RestaurantModel>, MongoDBContext<RestaurantModel, IRestaurantsDatabaseSetting>>();
        }

    }

}
