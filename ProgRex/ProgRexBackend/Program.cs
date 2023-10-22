using Microsoft.AspNetCore.Builder; //Necessary imports to use ASP.NET web building functionalty and hosting services
using Microsoft.Extensions.Hosting; //Necessary imports to use ASP.NET web building functionalty and hosting services
using Microsoft.EntityFrameworkCore; //SQL
using ProgRexBackend.Models; // Use the correct namespace



var builder = WebApplication.CreateBuilder(args);  //Initializes a new web app

// This line configures SQLite for your application
builder.Services.AddDbContext<ProgRexContext>(options => options.UseSqlite("Data Source=progrex.db"));

var app = builder.Build(); //Constructs the web app, using the config set up in the builder

app.MapGet("/", () => "Hello, ProgRex!");  //Routes

app.MapGet("/pushups", () => "Pushups data will be here");

app.Run();
