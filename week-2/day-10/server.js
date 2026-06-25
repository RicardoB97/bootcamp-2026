require('dotenv').config();
const express = require('express');

const app = express();
const authRoutes = require('./routes/authRoutes');
const caseRoutes = require('./routes/cases');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/cases', caseRoutes);
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});