exports.login = (req, res) => {
    const {
        username,
        password
    } = req.body;

    res.json({
        message: 'Login success',
        token: 'dummy-jwt-token'
    });
};