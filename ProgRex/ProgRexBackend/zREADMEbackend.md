##### Folder setup
1. Model classes in the model folder represents the structure of the tables in the database.

2. Data folder -> AppDbContect.cs represents the session with the database. Allows to query and save instances of entities(classes defined in step 1) to a database.












Database Setup (optional for now): If you're planning to save data (like the number of pushups), you'll eventually need a database. This can be a local database, cloud-based, relational, non-relational, etc. For starting out, .NET supports in-memory databases which are great for testing.

Middleware: You might need to add middleware to handle cross-origin requests (CORS) if your frontend is hosted on a different domain or port from your backend.

Endpoints: The routes you've defined ("/" and "/pushups") are the endpoints your frontend will hit to get data. You'll need to decide what kind of data you want to return, in what format, and any associated logic. For instance, if /pushups is supposed to return a user's pushup count, the logic might look into the database, fetch the number, and return it.

Error Handling: You'll need mechanisms to handle errors gracefully. This could be database errors, invalid input, etc.

Data Models: If you're saving data or passing complex data between frontend and backend, you'll want to define data structures or models to ensure consistency.

Authentication & Authorization (optional for now): If you're tracking pushups for individual users, you might need user accounts, which means handling user registration, login, and ensuring that users can only access their own data.

Testing: You'll want to write tests to make sure your API behaves as expected.