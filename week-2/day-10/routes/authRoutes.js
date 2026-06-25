const express = require('express');
const router = express.Router();

const { body } = require('express-validator');

const validationMiddleware = require('../middlewares/validationMiddleware');

const {
  register,
  login
} = require('../controllers/authController');

router.post(
  '/register',
  [
    body('email')
      .isEmail()
      .withMessage('Email inválido'),

    body('password')
      .isLength({ min: 6 })
      .withMessage('Password mínimo 6 caracteres')
  ],
  validationMiddleware,
  register
);

router.post(
  '/login',
  [
    body('email')
      .isEmail()
      .withMessage('Email inválido'),

    body('password')
      .notEmpty()
      .withMessage('Password requerido')
  ],
  validationMiddleware,
  login
);

module.exports = router;