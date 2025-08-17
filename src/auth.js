function login(email, password, usuarios) {
  const usuario = usuarios.find(u => u.email === email && u.password === password);
  return !!usuario; // true si encontró, false si no
}

module.exports = { login };

/*
function login(email, password, usuarios) {
  if (!email || !password) return false;
  const usuario = usuarios.find(
    u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  return Boolean(usuario);
}
  */
