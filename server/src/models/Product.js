// server/src/models/Product.js
const pool = require('../config/db');

class Product {
    static async getAll() {
        const result = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
        return result.rows;
    }

    static async getById(id) {
        const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
        return result.rows[0];
    }

    static async create(data) {
        const {
            category_id,
            name,
            description,
            image_url,
            spec_image_url
        } = data;

        const result = await pool.query(
            'INSERT INTO products (category_id, name, description, image_url, spec_image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [category_id, name, description, image_url, spec_image_url]
        );

        return result.rows[0];
    }

    static async update(id, data) {
        const {
            category_id,
            name,
            description,
            image_url,
            spec_image_url
        } = data;

        const result = await pool.query(
            'UPDATE products SET category_id = $1, name = $2, description = $3, image_url = $4, spec_image_url = $5, updated_at = NOW() WHERE id = $6 RETURNING *',
            [category_id, name, description, image_url, spec_image_url, id]
        );

        return result.rows[0];
    }

    static async delete(id) {
        await pool.query('DELETE FROM products WHERE id = $1', [id]);
    }

    static async getByCategoryId(category_id) {
        const result = await pool.query('SELECT * FROM products WHERE category_id = $1', [category_id]);
        return result.rows;
    }
}

module.exports = Product;