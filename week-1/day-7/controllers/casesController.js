const getCases = (req, res) => {
  res.json({
    message: 'Cases funcionando',
    user: req.user
  });
};

const deleteCase = (req, res) => {
  res.json({
    message: `Case ${req.params.id} eliminado`
  });
};

module.exports = {
  getCases,
  deleteCase
};