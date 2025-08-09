import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import photoRoutes from "./routes/photoRoutes.js";

dotenv.config();

// Connect to DB
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/photo", photoRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
