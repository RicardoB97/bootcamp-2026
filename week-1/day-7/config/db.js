const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'PlayStation3',
  database: 'lawfirm'
});

module.exports = db;