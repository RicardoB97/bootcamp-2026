const db = require('../config/db');

/* const getCases = async (req, res, next) => {

  try {

    const [rows] = await db.query(
      'SELECT * FROM cases'
    );

    res.json(rows);

  } catch (error) {

    next(error);

  }

}; */

const getCases = async (req, res, next) => {

  console.log('ENTRO AL NUEVO CONTROLLER');

  try {

    const [rows] = await db.query(`
    SELECT
      cases_.id,
      cases_.title,
      cases_.description,
      users.email,
      users.role
    FROM cases_
    JOIN users
      ON cases_.user_id = users.id
`);

    console.log(rows);

    res.json(rows);

  } catch (error) {

    console.error(error);
    next(error);

  }

};

const deleteCase = (req, res) => {
  res.json({
    message: `Case ${req.params.id} eliminado`
  });
};

module.exports = {
  getCases,
  deleteCase
};