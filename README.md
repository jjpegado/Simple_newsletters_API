# API Newsletter

Esta é uma API simples para gerenciamento de newsletters, permitindo que os usuários se inscrevam e recebam atualizações por e-mail.

## Pré-requisitos

Certifique-se de ter as seguintes dependências instaladas antes de prosseguir:

- Node.js e npm
- PostgreSQL

## Instalação

1. Clone este repositório:

git clone https://github.com/jjpegado/Simple_newsletters_API


2. Instale as dependências do projeto:

cd ./01
npm install


3. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias copiando do arquivo `.env.example`. Exemplo:

PORT=3000
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=seu_email@example.com
SMTP_PASSWORD=sua_senha_do_email


## Executando o Servidor

Execute o seguinte comando para iniciar o servidor:

npm run dev


O servidor estará disponível em `http://localhost:3000`.

## Endpoints da API

- `POST /usuario`: Inscreve um novo usuário na newsletter. Requer um corpo JSON com os campos `email` e `name`.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Knex.js](http://knexjs.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemailer](https://nodemailer.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações de pull.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
