const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const {
  getCases,
  getCaseById,
  createCase,
  login,
  updateCase,
  deleteCase
} = require('../controllers/casesController');

router.get('/', getCases);
router.get('/:id', getCaseById);
router.get('/', auth, getCases);
router.post('/', createCase);
router.post('/login', login);
router.put('/:id', updateCase);
router.delete('/:id', deleteCase);


module.exports = router; // 