require('dotenv').config();
const mysql = require('mysql2/promise');
const express = require('express');
const crud = require('./crud');

//Cria uma pool de conexões com o banco
global.pool = mysql.createPool({
  connectionLimit : 5,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DB_NAME,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS
});

//Cria as rotas do CRUD de contato
let app = express();
app.use(express.json());
app.post('/contato', async (req, res) => {
  let rs = await crud.create(req.body);
  res.status(200).json(rs);
});
app.get('/contato', async (req, res) => {
  let rs = await crud.read(req.body);
  res.status(200).json(rs);
});
app.put('/contato', async (req, res) => {
  let rs = await crud.update(req.body);
  res.status(200).json(rs);
})
app.delete('/contato', async (req, res) => {
  let rs = await crud.delete(req.body);
  res.status(200).json(rs);
})

//Inicia o servidor
app.listen(process.env.APP_PORT);