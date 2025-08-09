# MEN Stack CRUD - CREATE Operation

This is a simple **MongoDB + Express + Node.js** application that demonstrates how to connect to MongoDB Atlas, define a schema with validations, and implement the **CREATE** operation via an API endpoint.

---

## 📂 Project Flow

1. **Server Starts**  
   - `server.js` is the entry point.  
   - Loads environment variables from `.env` using `dotenv`.  
   - Connects to MongoDB Atlas via `connectDB()` from `config/db.js`.  
   - Sets up Express JSON middleware.  
   - Registers API routes from `routes/itemRoutes.js`.

2. **Database Connection**  
   - `config/db.js` uses `mongoose.connect()` to connect to MongoDB Atlas using the `MONGO_URI` from `.env`.  
   - If the connection is successful, a confirmation is logged in the console.

3. **Request Comes In** (POST `/api/items`)  
   - The request hits the route defined in `routes/itemRoutes.js`.  
   - That route calls the `createItem` function from `controllers/itemController.js`.

4. **Controller Handles Logic**  
   - `createItem` extracts `name`, `category`, `price`, `stock`, and `description` from the request body.  
   - It uses the Mongoose model `Item` (defined in `models/Item.js`) to create and save the document in the database.  
   - Validation rules in the schema are applied automatically.

5. **Schema & Validation**  
   - `models/Item.js` defines a schema with required fields, value limits, and enums.  
   - If any validation fails, Mongoose throws an error, which is returned to the client as a 400 status with the error message.

6. **Response Sent Back**  
   - If successful, the server responds with a `201 Created` status and the saved document.  
   - If there’s an error (validation, DB connection, etc.), an error message is returned.

7. **Data Visible in MongoDB Atlas**  
   - You can log into MongoDB Atlas → Cluster → **Browse Collections** to see the newly added document in your `items` collection.

