require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Import routes with correct filenames
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const todoRoutes = require('./routes/todo');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/todos', todoRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
