# API de Transferências

API Rest em Node.js/Express para login, registro, consulta de usuários e transferências, com banco de dados em memória.

## Instalação

1. Instale as dependências:
   ```
npm install express swagger-ui-express
   ```
2. Inicie o servidor:
   ```
node server.js
   ```

## Endpoints

- `POST /register` — Registra novo usuário (`username`, `password`, `isFavored` opcional)
- `POST /login` — Login de usuário (`username`, `password`)
- `GET /users` — Lista todos os usuários
- `POST /transfer` — Realiza transferência (`from`, `to`, `amount`)
- `GET /transfers` — Lista todas as transferências
- `GET /api-docs` — Documentação Swagger

## Regras de Negócio

- Não é possível registrar usuários duplicados
- Login exige usuário e senha
- Transferências acima de R$ 5.000,00 só para favorecidos
- Banco de dados em memória (dados somem ao reiniciar)

## Testes

A API foi estruturada para facilitar testes automatizados (ex: Supertest). Importe o `app.js` para os testes.
