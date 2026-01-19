const { users } = require('../model/userModel');

function registerUser({ login, senha, favorecidos = [] }) {
  if (!login || !senha) return { error: 'Login e senha obrigatórios' };
  if (users.find(u => u.login === login)) return { error: 'Usuário já existe' };
  const user = { login, senha, favorecidos };
  users.push(user);
  return { user };
}

function loginUser({ login, senha }) {
  if (!login || !senha) return { error: 'Login e senha obrigatórios' };
  const user = users.find(u => u.login === login && u.senha === senha);
  if (!user) return { error: 'Login ou senha inválidos' };
  return { user };
}

function listUsers() {
  return users.map(({ login, favorecidos }) => ({ login, favorecidos }));
}

function getUser(login) {
  return users.find(u => u.login === login);
}

module.exports = { registerUser, loginUser, listUsers, getUser };
