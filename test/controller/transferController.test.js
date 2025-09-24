const request  = require('supertest');
const sinon    = require('sinon');
const chai     = require('chai');
const expect   = chai.expect;
const app               = require('../../app');

describe('Transfer Controller', () => {
    describe(' POST /transfer', () => {
it('Quando informo ', async () => {
    const resposta = await request(app)
        .post('/transfer')
        .send({
            from: "Ricardo ",
            to: "Pedro",
            amount: 100
        });
    expect(resposta.status).to.equal(400);
});

});
