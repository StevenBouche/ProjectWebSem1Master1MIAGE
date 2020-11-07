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
            services.AddTransient<IForumManagerView, ForumManager>();
            services.AddTransient<IForumManager, ForumManager>();
            services.AddTransient<IChannelManagerView, ChannelManager>();
            services.AddTransient<IChannelManager, ChannelManager>();
            services.AddTransient<IMessageManagerView, MessageManager>();
            services.AddTransient<IMessageManager, MessageManager>();
        }
    }
}
