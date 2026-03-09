// <reference types="cypress" />

describe('API - Exclusão de Usuários', () => {

  it('Cenário Positivo - Excluir usuários por ID', () => {
     
    const userId = "ID_DO_USUARIO";
    cy.request('DELETE', `/usuarios/${userId}`).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.message).to.eq("Registro excluído com sucesso");
    });
  });
});

