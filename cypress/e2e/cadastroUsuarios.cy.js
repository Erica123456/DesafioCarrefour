
/// <reference types="cypress" />

describe('API - Cadastro de Usuários', () => {

  it('Cenário Positivo - Cadastrar novo usuário e validar mensagem Cadastro realizado com sucesso ', () => {

    // 👉 Aqui você gera o email dinâmico ANTES da requisição para não cair na regra de email duplicado na execução

    const emailDinamico = `marcio_${Date.now()}@qa.com.br`;

    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/usuarios/',
      body: {
        nome: "Marcio da Silva",
        email: emailDinamico,   // 👉 Usa o email dinâmico aqui
        password: "teste12345",
        administrador: "true"
      }
    }).then((response) => {

      //Valida o status code
      expect(response.status).to.equal(201);

      //Valida o ID do usuário criado
      expect(response.body._id).not.empty;

      //Valida a mensagem de sucesso
      expect(response.body.message).to.equal("Cadastro realizado com sucesso");

    });
  });
});



it('Cenário Positivo - Cadastrar novo usuário como administrador (false) e validar mensagem cadastro realizado com sucesso', () => {

  // 👉 Aqui você gera o email dinâmico ANTES da requisição para não cair na regra de email duplicado na execução

  const emailDinamico = `marcio_${Date.now()}@qa.com.br`;

  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/usuarios/',
    body: {
      nome: "Roberto da Silva",
      email: emailDinamico,   // 👉 Usa o email dinâmico aqui
      password: "teste12345",
      administrador: "false"
    }
  }).then((response) => {

    //Valida o status code
    expect(response.status).to.equal(201);

    //Valida o ID do usuário criado 
    expect(response.body._id).not.empty;

    //Valida a mensagem de sucesso
    expect(response.body.message).to.equal("Cadastro realizado com sucesso");

  });
});



it('Cenário Positivo - Cadastrar novo usuário com nome contendo acentos e validar mensagem validar mensagem cadastro realizado com sucesso', () => {

  // 👉 Aqui você gera o email dinâmico ANTES da requisição para não cair na regra de email duplicado na execução

  const emailDinamico = `jose_${Date.now()}@qa.com.br`;

  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/usuarios/',
    body: {
      nome: "José da Silva",
      email: emailDinamico,   // 👉 Usa o email dinâmico aqui
      password: "teste12345",
      administrador: "true"
    }
  }).then((response) => {

    //Valida o status code
    expect(response.status).to.equal(201);

    //Valida o ID do usuário criado 
    expect(response.body._id).not.empty;

    //Valida a mensagem de sucesso
    expect(response.body.message).to.equal("Cadastro realizado com sucesso");

  });
});



it('Cenário Positivo - Cadastrar novo usuário com e-mail válido e validar mensagem cadastro realizado com sucesso', () => {

  // 👉 Aqui você gera o email dinâmico ANTES da requisição para não cair na regra de email duplicado na execução

  const emailDinamico = `viviane_${Date.now()}@gmail.com.br`;

  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/usuarios/',
    body: {
      nome: "Viviane Pereira",
      email: emailDinamico,   // 👉 Usa o email dinâmico aqui
      password: "teste12345",
      administrador: "true"
    }
  }).then((response) => {

    //Valida o status code
    expect(response.status).to.equal(201);

    //Valida o ID do usuário criado 
    expect(response.body._id).not.empty;

    //Valida a mensagem de sucesso
    expect(response.body.message).to.equal("Cadastro realizado com sucesso");

  });
});



it('Cenário Positivo - Cadastrar novo usuário com senha forte e validar mensagem cadastro realizado com sucesso', () => {

  // 👉 Aqui você gera o email dinâmico ANTES da requisição para não cair na regra de email duplicado na execução

  const emailDinamico = `viviane_${Date.now()}@gmail.com.br`;

  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/usuarios/',
    body: {
      nome: "Viviane Pereira",
      email: emailDinamico,   // 👉 Usa o email dinâmico aqui
      password: "Teste@123",
      administrador: "true"
    }
  }).then((response) => {

    //Valida o status code
    expect(response.status).to.equal(201);

    //Valida o ID do usuário criado 
    expect(response.body._id).not.empty;

    //Valida a mensagem de sucesso
    expect(response.body.message).to.equal("Cadastro realizado com sucesso");

  });
});



it('Cenário Negativo - Retornar erro quando o nome está vazio e validar mensagem nome não pode ficar em branco', () => {

  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/usuarios/',
    failOnStatusCode: false, // evita que Cypress quebre em status de erro
    body: {
      nome: "",
      email: "viviane@gmail2.com.br",
      password: "Teste@123",
      administrador: "true"
    }
  }).then((response) => {

    //Valida o status code
    expect(response.status).to.equal(400);

    //Valida a mensagem de erro para nome vazio
    expect(response.body.nome).to.equal("nome não pode ficar em branco");
  });
});



it('Cenário Negativo - Retornar erro quando o email está vazio e validar mensagem email não pode ficar em branco', () => {

  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/usuarios/',
    failOnStatusCode: false, // evita que Cypress quebre em status de erro
    body: {
      nome: "Viviane Pereira",
      email: "",
      password: "Teste@123",
      administrador: "true"
    }
  }).then((response) => {

    //Valida o status code
    expect(response.status).to.equal(400);

    //Valida a mensagem de erro para email vazio
    expect(response.body.email).to.equal("email não pode ficar em branco");
  });
});



it('Cenário Negativo - Retornar erro quando a password está vazia e validar mensagem password não pode ficar em branco', () => {

  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/usuarios/',
    failOnStatusCode: false, // evita que Cypress quebre em status de erro
    body: {
      nome: "Viviane Pereira",
      email: "viviane@gmail2.com.br",
      password: "",
      administrador: "true"
    }
  }).then((response) => {

    //Valida o status code
    expect(response.status).to.equal(400);

    //Valida a mensagem de erro para password vazia
    expect(response.body.password).to.equal("password não pode ficar em branco");

  });
});

it('Cenário Negativo - Retornar erro quando o email estiver inválido e retornar mensagem email deve ser um email válido', () => {

  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/usuarios/',
    failOnStatusCode: false, // evita que Cypress quebre em status de erro
    body: {
      nome: "Viviane Pereira",
      email: "viviane.gmail.com.br",
      password: "Teste@123",
      administrador: "true"
    }
  }).then((response) => {

    //Valida o status code
    expect(response.status).to.equal(400);

    //Valida a mensagem de erro para email inválido
    expect(response.body.email).to.equal("email deve ser um email válido");

  });
});



it('Cenário Negativo - Retornar erro quando o email estiver duplicado e validar mensagem Este email já está sendo usado', () => {

  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/usuarios/',
    body: {
      nome: "Viviane Pereira",
      email: "viviane@gmail2.com.br",
      password: "Teste@123",
      administrador: "true"
    },
    failOnStatusCode: false, // evita que Cypress quebre em status de erro 
  }).then((response) => {

    //Valida o status code
    expect(response.status).to.equal(400);

    //Valida a mensagem de erro para email duplicado
    expect(response.body.message).to.equal("Este email já está sendo usado");
  });
});









