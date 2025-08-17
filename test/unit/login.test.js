const { login } = require('../../src/auth');

describe("Función login", () => {
  test("debería autenticar con credenciales válidas", () => {
    const usuarios = [
      { email: "user@test.com", password: "1234" }
    ];

    const resultado = login("user@test.com", "1234", usuarios);
    expect(resultado).toBe(true);   // esperamos que devuelva true
  });

  test("debería fallar con credenciales inválidas", () => {
    const usuarios = [
      { email: "user@test.com", password: "1234" }
    ];

    const resultado = login("user@test.com", "wrong", usuarios);
    expect(resultado).toBe(false);  // esperamos false
  });
});
