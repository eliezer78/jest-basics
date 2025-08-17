const express = require("express");
const { login } = require("./auth");

const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const success = login(email, password);
  if (success) {
    return res.status(200).json({ success: true });
  }
  return res.status(401).json({ success: false });
});

module.exports = app;