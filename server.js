const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authController = require("./src/controllers/authController");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Test route (VERY IMPORTANT for Railway)
app.get("/", (req, res) => {
  res.json({ message: "Blog API running 🚀" });
});

// Blog routes (example)
app.post("/api/blogs", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  res.status(201).json({ title, content });
});

// Auth route
app.post("/auth/login", authController.login);

// IMPORTANT: Railway PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
