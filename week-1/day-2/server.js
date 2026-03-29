const express = require('express');
const app = express();
const cases = [
  { id: 1, client: "Juan Perez", status: "open" },
  { id: 2, client: "Maria Lopez", status: "closed" }
];

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

app.get('/cases', (req, res) => {
  res.json(cases);
});

app.get('/cases/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const caseItem = cases.find(c => c.id === id);

  if (!caseItem) {
    return res.status(404).send("Case not found");
  }

  res.json(caseItem);
});

app.use(express.json());

app.post('/cases', (req, res) => {
  const newCase = {
    id: cases.length + 1,
    client: req.body.client,
    status: req.body.status
  };

  cases.push(newCase);

  console.log(cases);
  
  res.status(201).json(newCase);
});