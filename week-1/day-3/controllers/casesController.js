let cases = [
  { id: 1, client: "Juan Perez", status: "open" },
  { id: 2, client: "Maria Lopez", status: "closed" }
];

exports.getCases = (req, res) => {
  res.json(cases);
};

exports.getCaseById = (req, res) => {
  const id = parseInt(req.params.id);
  const caseItem = cases.find(c => c.id === id);

  if (!caseItem) {
    return res.status(404).send("Case not found");
  }

  res.json(caseItem);
};

exports.createCase = (req, res) => {
  const newCase = {
    id: cases.length + 1,
    client: req.body.client,
    status: req.body.status
  };

  cases.push(newCase);
  res.status(201).json(newCase);
};

exports.updateCase = (req, res) => {
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
};

exports.deleteCase = (req, res) => {
  const id = parseInt(req.params.id);
  const caseIndex = cases.findIndex(c => c.id === id);

  if (caseIndex === -1) {
    return res.status(404).send("Case not found");
  }

  const deletedCase = cases.splice(caseIndex, 1);
  res.json(deletedCase);
};