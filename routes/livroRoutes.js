const express = require('express')
const router = express.Router()

const validarTitulo = require('../middlewares/validarTitulo')
const Livro = require('../models/livro')

const livroController = require('../controllers/livroController')

// ROTA - CREATE LIVRO
router.post('/livros', validarTitulo, livroController.criarLivro);

// ROTA - READ LIVRO ESPECIFICO
router.get('/livros/:id', livroController.buscarLivroPorId);

// ROTA - READ LIVRO
router.get('/livros', livroController.buscarLivros);


// ROTA - UPDATE LIVRO
router.patch('/livros/:id', validarTitulo, livroController.atualizarLivro)

// ROTA - DELETE LIVRO
router.delete('/livros/:id', livroController.deletarLivro);

module.exports = router