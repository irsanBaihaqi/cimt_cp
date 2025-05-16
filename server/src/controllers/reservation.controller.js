const Reservation = require('../models/Reservation');

exports.getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.getAll();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch reservations',
            error
        });
    }
};

exports.createReservation = async (req, res) => {
    const {
        customer_name,
        email,
        requested_date
    } = req.body;
    try {
        const result = await Reservation.create(customer_name, email, requested_date);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to create reservation',
            error
        });
    }
};