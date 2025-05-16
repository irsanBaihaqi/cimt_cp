exports.handleMessage = (req, res) => {
    const {
        message
    } = req.body;
    let response = "I'm still learning about that.";

    if (message.toLowerCase().includes('hello')) {
        response = 'Hello! How can I help you?';
    }

    res.json({
        message,
        response
    });
};