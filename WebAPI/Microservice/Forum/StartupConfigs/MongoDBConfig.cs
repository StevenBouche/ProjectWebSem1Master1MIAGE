using Forum.DataAccess;
using Forum.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using MongoDBAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forum.StartupConfigs
{
    public class MongoDBConfig
    {
        public static void ConfigureService(IServiceCollection services, Func<string, IConfigurationSection> config)
        {
            services.Configure<ForumDatabaseSetting>(config(nameof(ForumDatabaseSetting)));
            services.AddSingleton<IForumDatabaseSetting>(sp => sp.GetRequiredService<IOptions<ForumDatabaseSetting>>().Value);
            services.AddTransient<IMongoDBContext<ForumObj>, MongoDBContext<ForumObj, IForumDatabaseSetting>>();
        }
    }
}
