exports.dashboard = (req, res) => {
    res.json({
        message: 'Welcome to admin dashboard'
    });
};

exports.profile = (req, res) => {
    res.json({
        user: 'Admin Profile Info'
    });
};