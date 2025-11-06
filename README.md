# 🚀 CRUD API - Gestão de Estudantes

Este projeto é uma API RESTful completa para gerenciar um cadastro de estudantes (Criar, Ler, Atualizar, Deletar). Foi desenvolvido como projeto prático para a disciplina de Desenvolvimento Web II do curso de Desenvolvimento de Software Multiplataforma da Fatec Luigi Papaiz.

O projeto também inclui um front-end simples (HTML/CSS/JS) para testar e consumir a API.

**Professor Responsável:** Prof. PhD. Bruno Zolotareff dos Santos.

---

## 💻 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

**Back-end:**
* **Node.js:** Ambiente de execução do JavaScript no servidor.
* **Express:** Framework para criação do servidor e das rotas da API.
* **MySQL2 (`mysql2/promise`):** Driver para conexão com o banco de dados MySQL, utilizando Promises (async/await).
* **Dotenv:** Para gerenciamento de variáveis de ambiente (proteção de senhas).
* **CORS:** Middleware para permitir que o front-end acesse a API.

**Front-end:**
* **HTML5**
* **CSS3**
* **JavaScript (Vanilla):** Com `fetch` API para consumir o back-end.

**Banco de Dados:**
* **MySQL:** Banco de dados relacional para armazenar os estudantes.

---

## ✨ Funcionalidades (Endpoints da API)

A API (disponível sob o prefixo `/api`) possui os seguintes endpoints:

* `GET /usuarios`: Retorna uma lista com todos os estudantes cadastrados.
* `GET /usuarios/:id`: Retorna os dados de um estudante específico.
* `POST /usuarios`: Cria um novo estudante no banco de dados.
* `PUT /usuarios/:id`: Atualiza os dados (nome e/ou email) de um estudante existente.
* `DELETE /usuarios/:id`: Deleta um estudante do banco de dados.

---

## 🛠️ Como Rodar o Projeto (Localmente)

Para rodar este projeto no seu computador, você precisará ter o [Node.js](https://nodejs.org/) e o [MySQL](https://www.mysql.com/products/community/) (ou XAMPP) instalados.

Siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/GuilhermeSilva-25/CRUD_API.git
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd CRUD_API
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure o Banco de Dados:**
    * Execute o script `banco.sql` (que está na raiz do projeto) no seu MySQL Workbench ou DBeaver para criar o banco `dados` e a tabela `estudante`.

5.  **Configure as Variáveis de Ambiente:**
    * Na raiz do projeto, crie um arquivo chamado `.env`
    * Copie o conteúdo abaixo para dentro do `.env` e **altere com suas credenciais**:

    ```env
    # Variáveis do Banco de Dados
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=sua_senha_do_mysql
    DB_DATABASE=dados
    ```

6.  **Inicie o servidor:**
    ```bash
    node server.js
    ```

7.  **Acesse a aplicação:**
    * O servidor back-end estará rodando em `http://localhost:3000/api/usuarios`
    * O front-end de testes estará disponível em `http://localhost:3000`

---

## 👨‍💻 Autor

Este projeto foi desenvolvido por:

**Daniel Felipe Ferreira**

**Gabriel de Moura**

**Guilherme dos Santos Silva**

**Johnny da Silva Franco de Lima**