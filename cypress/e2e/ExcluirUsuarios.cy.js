/// <reference types="cypress" />

describe('API - Cadastro de Usuários', () => {

  it('Cenário Positivo - Cadastrar e excluir usuário', () => {

    const emailDinamico = `luciana_${Date.now()}@qa.com.br`;

    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/usuarios/',
      body: {
        nome: "Luciana da Rocha",
        email: emailDinamico,
        password: "teste12345",
        administrador: "true"
      }
    }).then((response) => {
      // Validações do cadastro
      expect(response.status).to.equal(201);
      expect(response.body._id).not.empty;
      expect(response.body.message).to.equal("Cadastro realizado com sucesso");

      // Captura o ID
      const userId = response.body._id;
      cy.log("ID capturado: " + userId);

      // Usa o ID para excluir o usuário
      cy.request({
        method: 'DELETE',
        url: `http://localhost:3000/usuarios/${userId}`
      }).then((deleteRes) => {
        expect(deleteRes.status).to.eq(200);
        expect(deleteRes.body.message).to.eq("Registro excluído com sucesso");
      });
    });
  });
});