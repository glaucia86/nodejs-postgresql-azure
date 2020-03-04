/**
 * Arquivo: app.js
 * Descrição: arquivo responsável por toda a configuração da aplicação.
 * Data: 02/03/2020
 * Author: Glaucia Lemos
 */

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

// Importando o arquivo 'database.js':
const database = require('./config/database'); // ==> aqui é a conexão local com o PostgreSQL

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: database.local.localUrl,
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

// ==> Rotas da API:
const index = require('./routes/index'); // linha de código temporário
// const productRoute = require('./routes/product.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index); // linha de código temporário
// app.use('/api/, productRoute');

module.exports = app;
