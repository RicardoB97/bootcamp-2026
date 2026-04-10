module.exports = (req, res, next) => {
  const auth = req.headers.authorization;
    console.log("HEADERS:", req.headers);
  if (!auth) {
    return res.status(401).json({ message: "No autorizado" });
  }

  next();
};

