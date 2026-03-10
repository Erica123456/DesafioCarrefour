/// <reference types="cypress" />

describe('Buscar Usuários por ID- API', () => {
  it('Cenário Positivo - Retornar 200 ao buscar por ID e validar demais dados dos usuários', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/usuarios/FsBNqPjPCLGfngSY' // substitua por um ID válido 
    }).then((response) => {

      // Valida status code 
      expect(response.status).to.equal(200);

      // Valida campos do usuário
      expect(response.body.nome).to.equal('Paulo Gomes');
      expect(response.body.email).to.equal('paulogomes@qa.com.br');
      expect(response.body.password).to.equal('teste');
      expect(response.body.administrador).to.equal('false');
      expect(response.body._id).to.equal('FsBNqPjPCLGfngSY');

    });
  });
});



describe('Buscar Usuários por ID- API', () => {
  it('Cenário Negativo - Retornar 400 ao buscar por ID e validar mensagem de usuário não encontrado', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/usuarios/nxM1gmhh6lTQb3y5', // substitua por um ID inválido
      failOnStatusCode: false // permite capturar o body mesmo em erro
    }).then((response) => {
      // Valida status code
      expect(response.status).to.equal(400);

      // Valida mensagem de erro
      expect(response.body.message).to.equal('Usuário não encontrado');
    });
  });
});



