const express = require('express');
const app = express(); // 👈 primero creas app

app.use(express.json()); // 👈 luego lo usas

const caseRoutes = require('./routes/cases');

app.use('/cases', caseRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});