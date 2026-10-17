const mongoose = require('mongoose')
const schemaUsuario = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    telefone: { type: String },
    dataCadastro: { type: Date, default: Date.now }
});

const Usuario = mongoose.model('Usuario', schemaUsuario);
module.exports = Usuario;