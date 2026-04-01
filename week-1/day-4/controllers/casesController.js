const db = require('../db');

exports.getCases = (req, res) => {
  db.query('SELECT * FROM cases', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};