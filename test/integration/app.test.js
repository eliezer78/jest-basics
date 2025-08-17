const request = require("supertest");
const app = require("../../src/app");

// Mockear el módulo db.js
jest.mock("../../src/db", () => ({
  findUser: jest.fn()
}));

const db = require("../../src/db");

describe("Pruebas de integración - /login con DB mockeada", () => {
  test("login válido", async () => {
    db.findUser.mockReturnValue({ email: "user@test.com", password: "1234" });

    const res = await request(app)
      .post("/login")
      .send({ email: "user@test.com", password: "1234" });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  test("login inválido", async () => {
    db.findUser.mockReturnValue({ email: "user@test.com", password: "1234" });

    const res = await request(app)
      .post("/login")
      .send({ email: "user@test.com", password: "wrong" });

    expect(res.statusCode).toBe(401);
    expect(res.body.success).toBe(false);
  });

  test("usuario no encontrado", async () => {
    db.findUser.mockReturnValue(undefined);

    const res = await request(app)
      .post("/login")
      .send({ email: "notfound@test.com", password: "1234" });

    expect(res.statusCode).toBe(401);
    expect(res.body.success).toBe(false);
  });
});