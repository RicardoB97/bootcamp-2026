const express = require('express');
const app = express();

app.use(express.json());

// importar rutas
const caseRoutes = require('./routes/cases');

// usar rutas
app.use('/cases', caseRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});