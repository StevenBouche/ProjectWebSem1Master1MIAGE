using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace PolicyMiddleware
{
    public class PolicyOrigins
    {

        public static void ConfigureServices(IServiceCollection services)
        {

            services.AddCors(options =>
            {
                options.AddPolicy(name: "AllowOriginsGateway", builder => {
                    builder
                        .WithOrigins("http://localhost:7000")
                        .AllowAnyHeader()
                        .AllowAnyMethod();

                    builder
                        .WithOrigins("https://localhost:7001")
                        .AllowAnyHeader()
                        .AllowAnyMethod();

                    builder
                        .WithOrigins("http://51.210.181.145:7000")
                        .AllowAnyHeader()
                        .AllowAnyMethod();

                    builder
                        .WithOrigins("https://51.210.181.145:7001")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });

        }

        public static void ConfigureServicesPolicyUI(IServiceCollection services)
        {

            services.AddCors(options =>
            {
                options.AddPolicy(name: "AllowOriginsUI", builder => {
                    builder
                        .WithOrigins("http://localhost:4200")
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();

                    builder
                        .WithOrigins("http://51.210.181.145:4200")
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();

                });
            });

        }

        public static void ConfigureApp(IApplicationBuilder app)
        {
            app.UseCors("AllowOriginsGateway");
        }

        public static void ConfigureAppPolicyUI(IApplicationBuilder app)
        {
            app.UseCors("AllowOriginsUI");
        }

    }
}
