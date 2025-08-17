// Simula una base de datos en memoria
let usuarios = [
  { email: "user@test.com", password: "1234" },
];

function findUser(email) {
  return usuarios.find(u => u.email === email);
}

module.exports = { findUser };