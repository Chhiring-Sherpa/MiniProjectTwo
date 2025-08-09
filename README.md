📂 Project Flow
Server Starts

server.js is the entry point.

Loads environment variables from .env using dotenv.

Connects to MongoDB Atlas via connectDB() from config/db.js.

Sets up Express JSON middleware.

Registers API routes from routes/photoRoutes.js.

Database Connection

config/db.js uses mongoose.connect() to connect to MongoDB Atlas using the MONGO_URI from .env.

If the connection is successful, a confirmation is logged in the console.

Request Comes In (POST /api/photos)

The request hits the route defined in routes/photoRoutes.js.

That route calls the createPhoto function from controllers/photoController.js.

Controller Handles Logic

createPhoto extracts title, genre, price, availableCopies, and details from the request body.

It uses the Mongoose model Photo (defined in models/photo.js) to create and save the document in the database.

Validation rules in the schema are applied automatically.

Schema & Validation

models/photo.js defines a schema with required fields and validation rules appropriate for photography data.

If any validation fails, Mongoose throws an error, which is returned to the client as a 400 status with the error message.

Response Sent Back

If successful, the server responds with a 201 Created status and the saved document.

If there’s an error (validation, DB connection, etc.), an error message is returned.

Data Visible in MongoDB Atlas

You can log into MongoDB Atlas → Cluster → Browse Collections to see the newly added document in your photos collection.