const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

router.get('/dashboard', adminController.dashboard);
router.get('/profile', adminController.profile);

module.exports = router;