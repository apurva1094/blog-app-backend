const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

const createTestUser = async () => {
  const existing = await User.findOne({ email: 'testuser@example.com' });
  if (!existing) {
    const hashedPassword = await bcrypt.hash('Test1234', 10);
    await User.create({
      username: 'Apurva',
      email: 'testuser@example.com',
      password: hashedPassword
    });
    console.log('Test user created!');
  } else {
    console.log('Test user already exists');
  }
  mongoose.disconnect();
};

createTestUser();
