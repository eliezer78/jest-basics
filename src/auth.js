const db = require("./db");

function login(email, password) {
  const usuario = db.findUser(email);
  if (!usuario) return false;
  return usuario.password === password;
}

module.exports = { login };