const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth'); // 👈 IMPORTANTE

const {
  getCases,
  getCaseById,
  createCase,
  updateCase,
  deleteCase,
  login
} = require('../controllers/casesController');

router.post('/login', login);


router.get('/', auth, getCases);

router.get('/:id', getCaseById);
router.post('/', createCase);
router.put('/:id', updateCase);
router.delete('/:id', deleteCase);

module.exports = router;