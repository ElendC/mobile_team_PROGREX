using Microsoft.EntityFrameworkCore;

//Namespaces: Organize code and prevent naming collison
//Allow to group related classes, structs and other types
//Can span multiple files,
namespace ProgRexBackend.Models 
{

 // ProgRexContext class that inherits from the DbContext class provided by EF Core
    public class ProgRexContext : DbContext //By inheriting, our class can use all functions from DbContext
    {
        // Constructor that takes in the DbContextOptions to configure the context
        public ProgRexContext(DbContextOptions<ProgRexContext> options) : base(options)
        {
        }

        // DbSets represent tables in the database.
        // Here, we declare a DbSet for the UserRecord model, which means we'll have a table for UserRecords.
        public DbSet<Pushup> Pushups { get; set; }
        public DbSet<Workout> Workouts { get; set; }
        public DbSet<User> Users { get; set; }
    }
}