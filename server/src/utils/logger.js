// src/utils/logger.js

const fs = require('fs');
const path = require('path');
const moment = require('moment'); // Jika belum install, jalankan: npm install moment

const logFilePath = path.join(__dirname, '../logs', 'server.log');

// Buat folder logs jika belum ada
if (!fs.existsSync(path.join(__dirname, '../logs'))) {
  fs.mkdirSync(path.join(__dirname, '../logs'));
}

const logRequest = (req, res, next) => {
  const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  const method = req.method;
  const url = req.originalUrl;

  const log = `[${timestamp}] ${method} ${url}\n`;

  fs.appendFileSync(logFilePath, log);

  // Log ke console juga
  console.log(`[${timestamp}] ${method} ${url}`);

  next();
};

module.exports = logRequest;