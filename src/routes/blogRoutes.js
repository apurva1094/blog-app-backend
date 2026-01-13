const express = require('express');
const router = express.Router();
const { createBlog } = require('../controllers/blogController');
const protect = require('../middleware/auth');

router.post('/', protect, createBlog);

module.exports = router;
