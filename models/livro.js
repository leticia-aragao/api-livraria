const mongoose = require('mongoose')
const schemaLivro = new mongoose.Schema({
    titulo: { 
        type: String,
        required: [true, "O titulo é obrigatório"], 
        minlength: [3, "O titulo deve ter pelo menos 3 caracteres"]
     },
    autor: { 
        type: String, 
        required: [true, "O autor é obrigatorio"],
        minlength: [3, "O nome do autor deve ter pelo menos 3 caracteres"] 
    },
    ano: { 
        type: Number,
        required: [true, "O ano de publicação é obrigatório"],
        min: [1000, "Ano inválido"],
        max: [new Date().getFullYear(), "O ano não pode ser no futuro"]
    },
    genero: { 
        type: String,
        required: [true, "O genero é obrigatório"] 
    },
    dataCriacao: { type: Date, default: Date.now }
});

const Livro = mongoose.model('Livro', schemaLivro);
module.exports = Livro;