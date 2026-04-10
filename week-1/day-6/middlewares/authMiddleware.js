
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'Token requerido' });
  }

  const token = authHeader.split(' ')[1]; // Bearer TOKEN

  try {
    const decoded = jwt.verify(token, 'secret_key');

    req.user = decoded;

    next();

  } catch (error) {
    return res.status(403).json({ message: 'Token inválido' });
  }
};

module.exports = authMiddleware;
