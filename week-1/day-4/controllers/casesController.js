const db = require('../db');

exports.getCases = (req, res) => {
  db.query('SELECT * FROM cases', (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

exports.createCase = (req, res) => {
  const { client, status } = req.body;

  console.log("BODY:", req.body); // 👈 DEBUG

  db.query(
    'INSERT INTO cases (client, status) VALUES (?, ?)',
    [client, status],
    (err, result) => {
      if (err) {
        console.error(err); // 👈 DEBUG
        return res.status(500).send(err);
      }

      console.log("INSERT ID:", result.insertId); // 👈 DEBUG

      res.status(201).json({
        id: result.insertId,
        client,
        status
      });
    }
  );
};

exports.getCaseById = (req, res) => {
  const id = req.params.id;

  db.query(
    'SELECT * FROM cases WHERE id = ?',
    [id],
    (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }

      if (results.length === 0) {
        return res.status(404).send("Case not found");
      }

      res.json(results[0]);
    }
  );
};

exports.updateCase = (req, res) => {
  const id = req.params.id;
  const { client, status } = req.body;

  db.query(
    'UPDATE cases SET client = ?, status = ? WHERE id = ?',
    [client, status, id],
    (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }

      res.json({ message: "Case updated" });
    }
  );
};

exports.deleteCase = (req, res) => {
  const id = req.params.id;

  db.query(
    'DELETE FROM cases WHERE id = ?',
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }

      res.json({ message: "Case deleted" });
    }
  );
};

exports.login = (req, res) => {
  const { username, passwrd } = req.body;

  db.query(
    'SELECT * FROM users WHERE username = ? AND passwrd = ?',
    [username, passwrd],
    (err, results) => {
      if (err) return res.status(500).send(err);

      if (results.length === 0) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      res.json({ message: "Login successful" });
    }
  );
};