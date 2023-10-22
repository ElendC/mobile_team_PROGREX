public class Pushup
{
    public int PushupID { get; set; } // Primary key
    public int WorkoutID { get; set; } // Foreign key
    public int NumberOfPushups { get; set; }

    // Navigation property
    public Workout Workout { get; set; }
}
