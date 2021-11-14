const mysql = require('mysql2');

const db = mysql.createConnection({
  user: 'root',
  password: 'SovietOnion1917',
  database: 'employees'
});

module.exports = db;