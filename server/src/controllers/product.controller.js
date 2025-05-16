const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.getAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch products',
            error
        });
    }
};

exports.createProduct = async (req, res) => {
    const {
        name,
        description,
        category_id
    } = req.body;
    try {
        const result = await Product.create({
            name,
            description,
            category_id
        });
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to create product',
            error
        });
    }
};