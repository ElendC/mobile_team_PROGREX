public class User
{
    public int UserID { get; set; } // Primary key
    public string Name { get; set; }
    
    // Navigation properties
    public List<Workout> Workouts { get; set; }
}
