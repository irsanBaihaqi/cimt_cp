const Blog = require('../models/Blog');

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.getAll();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch blogs',
            error
        });
    }
};

exports.createBlog = async (req, res) => {
    const {
        title,
        content,
        author_id
    } = req.body;
    try {
        const result = await Blog.create(title, content, author_id);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to create blog',
            error
        });
    }
};