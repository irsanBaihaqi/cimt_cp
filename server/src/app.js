// src/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(express.json({
    limit: '10mb'
}));
app.use(express.urlencoded({
    extended: true,
    limit: '10mb'
}));
app.use(cors());
app.use(morgan('dev'));

// Logging custom (opsional)
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
});

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/admin', require('./routes/admin.routes'));
app.use('/api/products', require('./routes/product.routes'));
app.use('/api/reservations', require('./routes/reservation.routes'));
app.use('/api/blogs', require('./routes/blog.routes'));
app.use('/api/chatbot', require('./routes/chatbot.routes'));


app.use((err, req, res, next) => {
    console.error('Unhandled error:', err.stack);

    const status = err.status || 500;
    const message = err.message || 'Something went wrong';

    res.status(status).json({
        message,
        ...(process.env.NODE_ENV === 'development' && {
            stack: err.stack
        })
    });
});

module.exports = app;