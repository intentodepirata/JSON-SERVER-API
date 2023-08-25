module.exports = (req, res, next) => {
  const apiKey = req.headers["api-key"];
  if (apiKey === "secretkey") {
    next();
  } else {
    res.status(401).json({ message: "Acceso no autorizado" });
  }
};
