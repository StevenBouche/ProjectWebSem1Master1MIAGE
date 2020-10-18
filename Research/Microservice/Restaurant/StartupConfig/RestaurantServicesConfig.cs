using Microsoft.Extensions.DependencyInjection;
using Restaurant.Services;

namespace Restaurant.StartupConfig
{
    public class RestaurantServicesConfig
    {

        public static void ConfigureService(IServiceCollection services)
        {
            services.AddTransient<IRestaurantManager, RestaurantManager>();
        }

    }
}
