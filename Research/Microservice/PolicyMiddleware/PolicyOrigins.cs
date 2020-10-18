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
                });
            });

        }

        public static void ConfigureApp(IApplicationBuilder app)
        {
            app.UseCors("AllowOriginsGateway");
        }

    }
}
