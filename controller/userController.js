const express = require('express');
const router = express.Router();
const { registerUser, loginUser, listUsers } = require('../service/userService');

router.post('/register', (req, res) => {
  const result = registerUser(req.body);
  if (result.error) return res.status(400).json({ error: result.error });
  res.status(201).json({ message: 'Usuário registrado', user: result.user });
});

router.post('/login', (req, res) => {
  const result = loginUser(req.body);
  if (result.error) return res.status(400).json({ error: result.error });
  res.json({ message: 'Login bem-sucedido', user: result.user });
});

router.get('/users', (req, res) => {
  res.json(listUsers());
});

module.exports = router;
