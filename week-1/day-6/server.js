const express = require('express');
const app = express();

app.use(express.json());

const authRoutes = require('./routes/cases');

app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});