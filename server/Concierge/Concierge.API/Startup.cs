using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using Concierge.Api.Attributes;
using Concierge.DAL;
using Microsoft.EntityFrameworkCore;

namespace Concierge.Api
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
            configureAuth(services);
            var apiConfig = ConfigureApi();
            
            services.AddSwaggerGen(swagger =>
            {
                swagger.SwaggerDoc("v1", new OpenApiInfo { Title = "Concierge api" });
                swagger.CustomSchemaIds((type) => type.FullName);
            });


            var serializerSettings = new JsonSerializerSettings
            {
                NullValueHandling = NullValueHandling.Ignore,
            };

            services.AddDbContext<TheaterContext>(options =>
                options.UseNpgsql(Configuration.GetConnectionString("TreaterContext"), b=> b.MigrationsAssembly("Concierge.API")));

            services.AddCors(o => o.AddPolicy("AllowAll", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));

            JsonConvert.DefaultSettings = () => serializerSettings;
            services.AddControllers().AddNewtonsoftJson(options =>
            {
                options.SerializerSettings.NullValueHandling = serializerSettings.NullValueHandling;
                options.SerializerSettings.Converters = serializerSettings.Converters;
            });

            services.AddSingleton<IUnitOfWorkFactory, UnitOfWorkFactory>(x=> new UnitOfWorkFactory(apiConfig.ConnectionString));
            
            var sp = services.BuildServiceProvider();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseCors("AllowAll");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API");
            });
        }

        private void configureAuth(IServiceCollection services)
        {
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = false;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidIssuer = AuthOptions.ISSUER,
                        ValidateAudience = true,
                        ValidAudience = AuthOptions.AUDIENCE,
                        ValidateLifetime = true,
                        IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
                        ValidateIssuerSigningKey = true,
                    };
                });
        }

        private ApiConfig ConfigureApi() => new ApiConfig(
            Environment.GetEnvironmentVariable(@"DB_CONNECTION_STRING"),
            "https://ams3.digitaloceanspaces.com",
            "gnomj-storage",
            Environment.GetEnvironmentVariable(@"IMG_FOLDER"),
            "V2GGBE5SBKK2VYCLWU45", 
            "F6H8gOGDepFFJrJ6dvohZPzNn4Ff+xRVa+vkplQBwf8"
        );

    }
}
