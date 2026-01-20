const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

const app = require('../../app');

// Teste 
describe('Transfer Controller', () => {
     describe('POST /transfer', () => {
        it('Quando informo remetente e destinatario inexistente recebo 400' ,async() => {
               const res = await request(app)
                    .post('/transfer')
                    .send({ remetente: 'user1', destinatario: 'user2', valor: 1000 });
               expect(res.status).to.equal(400);
               expect(res.body).to.have.property('error', 'Usuário não encontrado');

          });
    }) ;   

});  

