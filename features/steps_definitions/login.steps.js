const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

// Simulamos la base de datos
const usuarios = [{ email: "user@test.com", password: "1234" }];
let resultado;

Given('un usuario con email {string} y contraseña {string}', function (email, password) {
  this.usuario = { email, password };
});

When('intenta ingresar con esas credenciales', function () {
  const encontrado = usuarios.find(
    u => u.email === this.usuario.email && u.password === this.usuario.password
  );
  resultado = encontrado ? "Bienvenido" : "Credenciales inválidas";
});

When('intenta ingresar con el email {string} y contraseña {string}', function (email, password) {
  const encontrado = usuarios.find(
    u => u.email === email && u.password === password
  );
  resultado = encontrado ? "Bienvenido" : "Credenciales inválidas";
});

Then('el sistema debería mostrar {string}', function (mensajeEsperado) {
  assert.strictEqual(resultado, mensajeEsperado);
});
