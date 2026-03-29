const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor funcionando 🔥');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

app.get('/cases', (req, res) => {
  res.json([
    { id: 1, name: "Caso 1" },
    { id: 2, name: "Caso 2" }
  ]);
});