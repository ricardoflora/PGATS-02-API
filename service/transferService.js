const { getUser } = require('./userService');

function transfer({ remetente, destinatario, valor }) {
  if (!remetente || !destinatario || typeof valor !== 'number') {
    return { error: 'Dados obrigatórios faltando' };
  }
  const sender = getUser(remetente);
  const receiver = getUser(destinatario);
  if (!sender || !receiver) return { error: 'Usuário encontrado' };
  const isFavorecido = sender.favorecidos && sender.favorecidos.includes(destinatario);
  if (!isFavorecido && valor >= 5000) {
    return { error: 'Transferência para não favorecido só até R$ 5.000,00' };
  }
  // Aqui poderia registrar a transferência em memória, se desejado
  return { success: true };
}

module.exports = { transfer };
