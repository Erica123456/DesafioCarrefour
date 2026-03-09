/// <reference types="cypress" />

describe('Listar Usuários - API', () => {
  it('Cenário Positivo - Retornar todos os usuários cadastrados e validar os dados', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios'
    }).then((response) => {
      // Valida status code
      expect(response.status).to.eq(200);

      // Valida que o body é um array
      expect(response.body.usuarios).to.be.an('array');

      // Valida que existe pelo menos um usuário
      expect(response.body.usuarios.length).to.be.greaterThan(0);

      // Valida campos do usuário
      const primeiroUsuario = response.body.usuarios[0];
      expect(primeiroUsuario).to.have.property('nome');
      expect(primeiroUsuario).to.have.property('email');
      expect(primeiroUsuario).to.have.property('password');
      expect(primeiroUsuario).to.have.property('administrador');
      expect(primeiroUsuario).to.have.property('_id');
    });
  });
});