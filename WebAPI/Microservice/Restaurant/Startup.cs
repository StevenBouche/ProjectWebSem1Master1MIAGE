using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using PolicyMiddleware;
using Restaurant.StartupConfig;
using Swashbuckle.AspNetCore.Filters;
using AuthMiddleware;

namespace Restaurant
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

            //Add auth middleware
            Auth.Configure(services, Configuration);
            //Define policy CORS for allow
            PolicyOrigins.ConfigureServices(services);

            //Define IOC DAL and Services restaurant
            RestaurantMongoDBConfig.ConfigureService(services, (name) => Configuration.GetSection(name));
            RestaurantServicesConfig.ConfigureService(services);

            // Add framework services.
            services.AddSwaggerGen(options =>
            {

                options.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Microservice - Restaurant HTTP API",
                    Version = "v1",
                    Description = "The Restaurants Microservice HTTP API. This is a Data-Driven/CRUD microservice"
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
               c.SwaggerEndpoint("/swagger/v1/swagger.json", "restaurant");
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
