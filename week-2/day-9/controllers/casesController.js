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

  res.json({
    prueba: 'SI VES ESTO, ESTAMOS EN EL CONTROLLER NUEVO'
  });

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