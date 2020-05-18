module.exports = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({ error: "You must log in!" });
  }
  next();
};
