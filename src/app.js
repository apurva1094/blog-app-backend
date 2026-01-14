const express = require("express");
const cors = require("cors");

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= ROUTES ================= */
app.use("/blogs", require("./routes/blogRoutes"));
app.use("/auth", require("./routes/authRoutes")); // optional
app.use("/todos", require("./routes/todo")); // optional

/* ================= ROOT TEST ================= */
app.get("/", (req, res) => {
  res.json({ message: "Blog API running 🚀" });
});

module.exports = app;
