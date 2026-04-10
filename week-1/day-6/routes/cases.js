const express = require('express');
const router = express.Router();

const auth = require('../middlewares/authMiddleware'); // IMPORTANTE
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/cases', authMiddleware, (req, res) => {
  res.json({
    message: 'Ruta protegida',
    user: req.user
  });
});

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