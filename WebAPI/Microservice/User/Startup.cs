using AuthMiddleware;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using PolicyMiddleware;
using Swashbuckle.AspNetCore.Filters;
using System;
using User.StartupConfig;

namespace User
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //Define policy CORS for allow
            PolicyOrigins.ConfigureServices(services);

            Auth.Configure(services, Configuration);

            MongoDBConfig.ConfigureService(services, name => Configuration.GetSection(name));
            ServicesConfig.ConfigureService(services);
            
            // Add framework services.
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Microservice - User API",
                    Version = "v1",
                    Description = "The Users Microservice HTTP API. This is a Data-Driven/CRUD microservice"
                });

                options.AddSecurityDefinition("bearer", new OpenApiSecurityScheme
                {
                    Type = SecuritySchemeType.Http,
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Scheme = "bearer"
                });

                options.OperationFilter<SecurityRequirementsOperationFilter>();

            });


                services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //Use defined policy CORS for allow
            PolicyOrigins.ConfigureApp(app);

            //app.UseHttpsRedirection();

            app.UseSwagger().UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "user");
            });

            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
