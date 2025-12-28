using ClassifiedsAPI.Models;
using ClassifiedsAPI.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;

namespace ClassifiedsAPI
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
            services.AddCors(options =>
            {
                options.AddPolicy("myPolicy1",
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:3000")
                                            .AllowAnyHeader()
                                            .AllowAnyMethod();
                    });

                /*options.AddPolicy("AnotherPolicy",
                    builder =>
                    {
                        builder.WithOrigins("http://www.example.com", "http://localhost:3000");
                    });*/
            });

            // requires using Microsoft.Extensions.Options
            services.Configure<ClassifiedstoreDatabaseSettings>(
                Configuration.GetSection(nameof(ClassifiedstoreDatabaseSettings)));

            services.AddSingleton<IClassifiedstoreDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<ClassifiedstoreDatabaseSettings>>().Value);

            services.AddSingleton<ClassifiedService>();

            services.AddControllers()
                .AddNewtonsoftJson(options => options.UseMemberCasing()); // Makes the property names in the web API's serialized JSON response match their corresponding property names in the CLR object type.

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "ClassifiedsAPI", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ClassifiedsAPI v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
