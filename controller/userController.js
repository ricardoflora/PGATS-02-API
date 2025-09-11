const userService = require('../service/userService');

exports.register = (req, res) => {
  try {
    const user = userService.registerUser(req.body);
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.login = (req, res) => {
  try {
    const user = userService.loginUser(req.body);
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.getUsers = (req, res) => {
  res.json(userService.getUsers());
};