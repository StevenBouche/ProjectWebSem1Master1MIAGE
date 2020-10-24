using Forum.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forum.StartupConfigs
{
    public class ServiceConfig
    {
        public static void ConfigureService(IServiceCollection services)
        {
           services.AddTransient<IForumManager, ForumManager>();
        }
    }
}
