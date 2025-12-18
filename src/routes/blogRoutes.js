const express = require('express');
const router = express.Router();
const { createBlog, getBlogs, updateBlog, deleteBlog } = require('../controllers/blogController');
const auth = require('../middleware/auth');

router.post('/', auth, createBlog);
router.get('/', getBlogs);
router.put('/:id', auth, updateBlog);      // Update blog
router.delete('/:id', auth, deleteBlog);   // Delete blog

module.exports = router;
