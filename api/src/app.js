/**
 * Arquivo: app.js
 * Descrição: arquivo responsável por toda a configuração da aplicação.
 * Data: 02/03/2020
 * Author: Glaucia Lemos
 */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Importando o arquivo 'database.js':
// const database = require('./config/database'); // ==> aqui é a conexão local com o PostgreSQL

mongoose.Promise = global.Promise;

// ==> Conexão com Base de Dados:
/* mongoose.connect(database.local.localUrl, { useNewUrlParser: true }).then(() => {
  console.log('A Base de Dados foi conectada com sucesso!');
}, (err) => {
  console.log(`Erro ao conectar com a Base de Dados...: ${err}`);
  process.exit();
}); */

// ==> Rotas da API:
const index = require('./routes/index'); // linha de código temporário
// const productRoute = require('./routes/product.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index); // linha de código temporário
// app.use('/api/, productRoute');

module.exports = app;
