// middlewares/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error('Unhandled error:', err.stack);

    const status = err.status || 500;
    const message = err.message || 'Internal server error';

    res.status(status).json({
        success: false,
        message,
        ...(process.env.NODE_ENV === 'development' && {
            stack: err.stack
        })
    });
};

module.exports = errorHandler;