const express = require("express");
const cors = require("cors");

const blogRoutes = require("./routes/blogRoutes");

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= ROOT ROUTE ================= */
app.get("/", (req, res) => {
  res.json({ message: "Blog API running 🚀" });
});

/* ================= API ROUTES ================= */
app.use("/blogs", blogRoutes);

module.exports = app;
