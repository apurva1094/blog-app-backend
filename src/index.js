const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authController = require('./controllers/authController');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.post('/auth/login', authController.login);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
