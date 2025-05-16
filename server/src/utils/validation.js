// server/utils/validation.js

/**
 * Validasi input produk
 * @param {Object} productData - Data produk dari request body
 * @returns {Array} - Kumpulan pesan error
 */
function validateProduct(productData) {
    const errors = [];

    if (!productData.name || productData.name.trim() === '') {
        errors.push('Product name is required');
    }

    if (!productData.description || productData.description.length < 20) {
        errors.push('Description must be at least 20 characters long');
    }

    if (!productData.category_id || isNaN(productData.category_id)) {
        errors.push('Valid category ID is required');
    }

    if (productData.price && (isNaN(productData.price) || productData.price <= 0)) {
        errors.push('Price must be a positive number');
    }

    return errors;
}

/**
 * Validasi input reservasi
 * @param {Object} reservationData - Data reservasi dari request body
 * @returns {Array} - Kumpulan pesan error
 */
function validateReservation(reservationData) {
    const errors = [];

    if (!reservationData.customer_name || reservationData.customer_name.trim() === '') {
        errors.push('Customer name is required');
    }

    if (!reservationData.email || !/\S+@\S+\.\S+/.test(reservationData.email)) {
        errors.push('Valid email is required');
    }

    if (!reservationData.requested_date || isNaN(Date.parse(reservationData.requested_date))) {
        errors.push('Valid date is required');
    }

    return errors;
}

/**
 * Validasi input admin login
 * @param {Object} authData - Data login admin
 * @returns {Array} - Kumpulan pesan error
 */
function validateAdminLogin(authData) {
    const errors = [];

    if (!authData.username || authData.username.trim() === '') {
        errors.push('Username is required');
    }

    if (!authData.password || authData.password.length < 6) {
        errors.push('Password must be at least 6 characters');
    }

    return errors;
}

module.exports = {
    validateProduct,
    validateReservation,
    validateAdminLogin
};