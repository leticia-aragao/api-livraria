const Livro = require('../models/livro')

const criarLivro = async (req, res) => {
    try{
        const { titulo, autor, ano, genero } = req.body;

        const novoLivro = new Livro({ titulo, autor, ano, genero });

        await novoLivro.save();

        res.status(201).json(novoLivro)
    }
    catch (erro){
        res.status(500).json({error: erro.message});
    }
}


const buscarLivroPorId = async (req, res) => {
    try{
        const { id } = req.params;

        const livro = await Livro.findById(id);
        res.json(livro);
    }
    catch (erro){
        res.status(500).json({error: "Erro ao buscar livro"});
    }
}


const buscarLivros = async (req, res) => {
    try{
        let query = {};

        // FILTRAGEM

        if (req.query.titulo) {
            query.titulo = {
                $regex: req.query.titulo,
                $options: "i"
            }
        }

        if (req.query.autor) {
            query.autor = req.query.autor
        }

        // PAGINAÇÃO
        
        const numeroPag = parseInt(req.query.numeroPag) || 1;
        const itensPorPagina = parseInt(req.query.itensPorPagina) || 5;
        const proximo = (numeroPag - 1) * itensPorPagina;

        // ORDENAÇÃO

        let ordenacao = {}
        if (req.query.ordenadoPor) {
            let ordenadoPor = req.query.ordenadoPor;
            let ordem = req.query.ordem === 'desc' ? -1 : 1;
            ordenacao[ordenadoPor] = ordem;
        }

        const livros = await Livro.find(query).skip(proximo).limit(itensPorPagina).sort(ordenacao);
        res.json(livros);
    }
    catch (erro){
        res.status(500).json({error: "Erro ao buscar livros"});
    }
}


const atualizarLivro = async (req, res) => {
    try{
        const {id} = req.params;
        const atualizacoes = req.body;
        const options = { new: true, runValidators: true }

        const livroAtualizado = await Livro.findByIdAndUpdate(id, atualizacoes, options)
        if (!livroAtualizado)
            return res.status(404).json({error: 'Livro não encontrado'});

        res.json(livroAtualizado)
    }
    catch (erro){
       res.status(500).json({ error: 'Erro ao atualizar o livro'}); 
    }
}


const deletarLivro = async (req, res) => {
    try{
        const {id} = req.params;
        const livroDeletado = await Livro.findByIdAndDelete(id);

        if(!livroDeletado)
            return res.status(404).json({error: 'Livro não encontrado'});

        res.json({message: `Livro ${livroDeletado.titulo} foi excluido com sucesso`})
    }
    catch(erro){
        res.status(500).json({ error: 'Erro ao deletar o livro'}); 
    }
}

module.exports = {
    criarLivro, 
    buscarLivroPorId, 
    buscarLivros, 
    atualizarLivro, 
    deletarLivro 
}