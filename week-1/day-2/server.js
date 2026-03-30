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

app.put('/cases/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const caseIndex = cases.findIndex(c => c.id === id);

  if (caseIndex === -1) {
    return res.status(404).send("Case not found");
  }

  cases[caseIndex] = {
    ...cases[caseIndex],
    client: req.body.client,
    status: req.body.status
  };

  res.json(cases[caseIndex]);
});

app.delete('/cases/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const caseIndex = cases.findIndex(c => c.id === id);

  if (caseIndex === -1) {
    return res.status(404).send("Case not found");
  }

  const deletedCase = cases.splice(caseIndex, 1);

  res.json(deletedCase);
});