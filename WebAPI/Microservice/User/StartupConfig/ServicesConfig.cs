using Microsoft.Extensions.DependencyInjection;
using User.Services;


namespace User.StartupConfig
{
    public class ServicesConfig
    {

        public static void ConfigureService(IServiceCollection services)
        {
            services.AddTransient<IAccountsManager, AccountsManager>();
            services.AddTransient<IJwtCacheManager, JwtManager>();
        }

    }
}
