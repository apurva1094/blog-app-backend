const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) return res.status(400).json({ message: 'Title and content are required' });

    const blog = await Blog.create({ title, content, author: req.user._id });
    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'username email');
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
// Update a blog (only by author)
exports.updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;

    if (!blogId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'Invalid blog ID' });
    }

    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    if (!req.user || blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'You are not authorized to update this blog' });
    }

    if (req.body.title) blog.title = req.body.title;
    if (req.body.content) blog.content = req.body.content;

    await blog.save();

    res.status(200).json({ message: 'Blog updated successfully', blog });
  } catch (error) {
    console.error('Update Blog Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a blog (only by author)
exports.deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;

    // Check for valid MongoDB ObjectId
    if (!blogId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'Invalid blog ID' });
    }

    const blog = await Blog.findById(blogId);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    // Check if logged-in user is the author
    if (!req.user || blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'You are not authorized to delete this blog' });
    }

    // Correct way to delete in Mongoose 6+
    await Blog.deleteOne({ _id: blogId });

    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Delete Blog Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
