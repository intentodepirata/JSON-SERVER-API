// Middleware para la autenticación básica
module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send("Authorization header is missing");
  }

  const auth = Buffer.from(authHeader.split(" ")[1], "base64").toString();
  const [username, password] = auth.split(":");

  // Verifica el nombre de usuario y la contraseña
  if (username === "usuario" && password === "password") {
    next(); // Usuario autenticado
  } else {
    return res.status(401).send("Acceso no autorizado");
  }
};
