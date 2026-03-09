# Desafio Carrefour - Projeto de Testes Automatizados de API com Cypress

# Visão Geral
Este projeto contém cenários de testes automatizados para validar endpoints da API.
Os testes foram implementados em Cypress, integrados a uma pipeline de CI/CD com GitHub Actions, e geram relatórios detalhados em Mochawesome.

# Configuração do Ambiente
# Pré-requisitos
- Node.js (v22.15.0)
- Cypress (instalado via dependências do projeto)
  
# Instalação
Clone o repositório e instale as dependências: 
git clone https://github.com/Erica123456/DesafioCarrefour.git 
cd https://github.com/Erica123456/DesafioCarrefour.git
npm install

# Execução dos Testes
Rodar localmente
Para abrir o Cypress em modo interativo:
npx cypress open

Para rodar os testes em modo headless (com geração de relatórios):
npx cypress run

# Relatórios
Acessar relatórios no GitHub Actions:
- Aba Actions > selecione a execução desejada > artifacts > baixe artefato mochawesome-report > abrir arquivo .html no navegador para visualizar os resultados.
Obs: Após a execução, os relatórios gerados na Vitual Machine são temporários por isso é necessário baixar para conseguir acessar depois.

# Integração com CI/CD
Os testes são executados automaticamente via GitHub Actions em:
- push → sempre que código é enviado para o repositório.
- pull_request → sempre que um PR é aberto ou atualizado.
Os relatórios são disponibilizados como artefatos na aba Actions do GitHub.

# API / Endpoints:
- https://serverest.dev/#/
- GET /users: Retorna uma lista de todos os usuários.
- POST /users: Cria um novo usuário.
- GET /users/{id}: Retorna os detalhes de um usuário específico.
- PUT /users/{id}: Atualiza as informações de um usuário.
- DELETE /users/{id}: Exclui um usuário.
 
# Casos de Teste Cobertos:
# Cadastro de Usuários:
- Cenário Positivo - Cadastrar novo usuário e validar mensagem Cadastro realizado com sucesso.
- Cenário Positivo - Cadastrar novo usuário como administrador (false) e validar mensagem cadastro realizado com sucesso.
- Cenário Positivo - Cadastrar novo usuário com nome contendo acentos e validar mensagem validar mensagem cadastro realizado com sucesso.
- Cenário Positivo - Cadastrar novo usuário com e-mail válido e validar mensagem cadastro realizado com sucesso.
- Cenário Positivo - Cadastrar novo usuário com senha forte e validar mensagem cadastro realizado com sucesso.
- Cenário Negativo - Retornar erro quando o nome está vazio e validar mensagem nome não pode ficar em branco.
- Cenário Negativo - Retornar erro quando o email está vazio e validar mensagem email não pode ficar em branco.
- Cenário Negativo - Retornar erro quando a password está vazia e validar mensagem password não pode ficar em branco.
- Cenário Negativo - Retornar erro quando o email estiver inválido e retornar mensagem email deve ser um email válido.
- Cenário Negativo - Retornar erro quando o email estiver duplicado e validar mensagem Este email já está sendo usado.
   
# Buscar Usuários:
- Cenário Positivo - Retornar 200 ao buscar por ID e validar demais dados dos usuários.
- Cenário Negativo - Retornar 400 ao buscar por ID e validar mensagem usuário não encontrado.

# Editar Usuários:
- Cenário Positivo - Editar dados de administrador e senha do usuário e validar mensagem registro alterado com sucesso.

# Listar Usuários Cadastrados:
- Cenário Positivo - Retornar todos os usuários cadastrados e validar os dados.

# Excluir Usuários:
- Cenário Positivo - Excluir usuários por ID e validar mensagem (aguando servidor local e on line retomar para concluir testes)

# Estrutura do Projeto
cypress/
 ├── e2e/              # Arquivos de teste
 ├── fixtures/         # Dados mockados
 ├── results/          # Relatórios Mochawesome
 └── support/          # Configurações auxiliares
.github/
 └── workflows/
      └── cypress.yml  # Workflow CI/CD
README.md              # Documentação do projeto






