using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using MongoDBAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using User.DataAccess;
using User.Model.Users;

namespace User.StartupConfig
{
    public class MongoDBConfig
    {
        public static void ConfigureService(IServiceCollection services, Func<string, IConfigurationSection> config)
        {
            //Load mongodb settings in RestaurantDatabaseSetting where is in appsettings.json with name : RestaurantDatabaseSetting
            services.Configure<UsersDatabaseSetting>(config(nameof(UsersDatabaseSetting)));
            //Define an interface who serve setting mongodb access
            services.AddSingleton<IUsersDatabaseSetting>(sp => sp.GetRequiredService<IOptions<UsersDatabaseSetting>>().Value);
            //Define Restaurant service data access 
            services.AddTransient<IMongoDBContext<Account>, MongoDBContext<Account, IUsersDatabaseSetting>>();
        }
    }
}
