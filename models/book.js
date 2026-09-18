const mongoose = require('mongoose')
const schemaLivro = new mongoose.Schema({
    titulo: { type: String },
    autor: { type: String },
    ano: { type: Number },
    genero: { type: String },
    dataCriacao: { type: Date, default: Date.now }
});

const Livro = mongoose.model('Livro', schemaLivro)

module.exports = Livro;