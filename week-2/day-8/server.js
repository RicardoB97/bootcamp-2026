require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const caseRoutes = require('./routes/cases');

app.use('/api/auth', authRoutes);
app.use('/api/cases', caseRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});