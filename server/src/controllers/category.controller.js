const Category = require("../models/Category");

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (err) {
        res.status(500).json({
            error: "Gagal ambil kategori"
        });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id);
        if (!category) return res.status(404).json({
            error: "Kategori tidak ditemukan"
        });
        res.json(category);
    } catch (err) {
        res.status(500).json({
            error: "Server error"
        });
    }
};