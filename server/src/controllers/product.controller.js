const Product = require("../models").Product;

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (err) {
        res.status(500).json({
            error: "Gagal mengambil daftar produk"
        });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({
            error: "Produk tidak ditemukan"
        });
        res.json(product);
    } catch (err) {
        res.status(500).json({
            error: "Server error"
        });
    }
};

exports.createProduct = async (req, res) => {
    const {
        name,
        description,
        category_id
    } = req.body;

    const image_url = req.files?.image ?
        `/images/products/${req.files.image[0].filename}` :
        null;
    const spec_image_url = req.files?.spec ?
        `/specifications/${req.files.spec[0].filename}` :
        null;

    try {
        const newProduct = await Product.create({
            name,
            description,
            category_id,
            image_url,
            spec_image_url
        });

        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({
            error: "Gagal menyimpan produk"
        });
    }
};

exports.updateProduct = async (req, res) => {
    const {
        name,
        description,
        category_id
    } = req.body;

    const updates = {
        name,
        description,
        category_id
    };

    if (req.files?.image) {
        updates.image_url = `/images/products/${req.files.image[0].filename}`;
    }

    if (req.files ?.spec) {
        updates.spec_image_url = `/specifications/${req.files.spec[0].filename}`;
    }

    try {
        const [updated] = await Product.update(updates, {
            where: {
                id: req.params.id
            },
            returning: true
        });

        if (!updated || updated === 0)
            return res.status(404).json({
                error: "Produk tidak ditemukan"
            });

        res.json(updated[0]);
    } catch (err) {
        res.status(500).json({
            error: "Gagal memperbarui produk"
        });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!deleted) return res.status(404).json({
            error: "Produk tidak ditemukan"
        });
        res.json({
            message: "Produk berhasil dihapus"
        });
    } catch (err) {
        res.status(500).json({
            error: "Gagal menghapus produk"
        });
    }
};