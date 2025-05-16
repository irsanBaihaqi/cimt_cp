// models/Reservation.js
const pool = require('../config/db');

class Reservation {
    static async getAllRequests() {
        const result = await pool.query('SELECT * FROM reservation_requests ORDER BY created_at DESC');
        return result.rows;
    }

    static async getRequestById(id) {
        const result = await pool.query('SELECT * FROM reservation_requests WHERE id = $1', [id]);
        return result.rows[0];
    }

    static async createRequest(data) {
        const {
            customer_name,
            email,
            phone,
            service_type,
            requested_date,
            notes
        } = data;

        const result = await pool.query(
            'INSERT INTO reservation_requests (customer_name, email, phone, service_type, requested_date, notes) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [customer_name, email, phone, service_type, requested_date, notes]
        );

        return result.rows[0];
    }

    static async approveRequest(request_id, admin_id) {
        await pool.query('BEGIN');

        try {
            await pool.query(
                'UPDATE reservation_requests SET status = $1 WHERE id = $2',
                ['approved', request_id]
            );
            const result = await pool.query(
                'INSERT INTO approved_reservations (request_id, admin_id) VALUES ($1, $2) RETURNING *',
                [request_id, admin_id]
            );

            await pool.query('COMMIT');
            return result.rows[0];
        } catch (err) {
            await pool.query('ROLLBACK');
            throw err;
        }
    }

    static async cancelRequest(id) {
        await pool.query('UPDATE reservation_requests SET status = $1 WHERE id = $2', ['rejected', id]);
    }
}

module.exports = Reservation;