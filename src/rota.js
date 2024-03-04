const express = require('express');
const {cadastroUsuario} = require('./controller/usuario');

const rotas = express();

rotas.post('/usuarios', cadastroUsuario)

module.exports = rotas;