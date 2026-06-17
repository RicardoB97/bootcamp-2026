const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const {
  getCases,
  deleteCase
} = require('../controllers/casesController');

router.get(
  '/',
  authMiddleware,
  getCases
);

router.delete(
  '/:id',
  authMiddleware,
  roleMiddleware('admin'),
  deleteCase
);

module.exports = router;