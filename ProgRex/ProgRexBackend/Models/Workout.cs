public class Workout
{
    public int WorkoutID { get; set; } // Primary key
    public int UserID { get; set; } // Foreign key
    public int Week { get; set; }
    public int Day { get; set; }
    public double Weight { get; set; }
    public int Break { get; set; }
    public DateTime Timestamp { get; set; } = DateTime.UtcNow; // Automatically set to the current time when a new record is created

    // Navigation properties
    public User User { get; set; }
    public List<Pushup> Pushups { get; set; }
}
