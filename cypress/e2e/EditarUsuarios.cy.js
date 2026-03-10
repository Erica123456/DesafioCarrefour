/// <reference types="cypress" />

describe('API - Edição de Usuários', () => {

  it('Cenário Positivo - Editar dados de administrador e senha do usuário e validar mensagem Registro alterado com sucesso', () => {

    // 👉 Aqui você gera o email dinâmico ANTES da requisição para não cair na regra de email duplicado na execução

    const emailDinamico = `Laura${Date.now()}@qa5.com`;

    cy.request({
      method: 'PUT',
      url: 'http://localhost:3000/usuarios/0uxuPY0cbmQhpEz1',
      body: {
        nome: "Laura Cardoso Gomes Neves",
        email: emailDinamico,   // 👉 Usa o email dinâmico aqui
        password: "novaSenha123",
        administrador: "false"
      }
    }).then((response) => {

      //Valida o status code
      expect(response.status).to.equal(200);

      //Valida a mensagem de sucesso
      expect(response.body.message).to.equal("Registro alterado com sucesso");

    });
  });
});




