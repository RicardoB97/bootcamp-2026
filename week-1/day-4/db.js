const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'PlayStation3',
  database: 'lawfirm'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting:', err);
    return;
  }
  console.log('Connected to MySQL');
});

module.exports = connection;