// criando a aplicação
const express = require('express')
const connectDB = require('./config/config')
const Livro = require('./models/book')

const app = express()
connectDB();

app.use(express.json()); // utilizar json no projeto

app.listen(3000, () => console.log("servidor rodando na porta 3000 testando"));

// app.get('/dividir', (req, res) => {
//     try{
//         let numerador = 10;
//         let denominador = 0;

//         if (denominador === 0)
//         {
//             throw new Error("Não é possivel dividir por zero.");
//         }

//         let resultado = numerador / denominador;
//         res.json({resultado})
//     }
//     catch(erro){
//         res.status(400).json({error: erro.message});
//     }
// });

app.post('/api/livros', async (req, res) => {
    try{
        const {titulo, autor, ano, genero } = req.body;
        const novoLivro = new Livro({titulo, autor, ano, genero});
        await novoLivro.save();
        res.status(201).json(novoLivro)
    }
    catch(e){
        res.status(500).json({erro: "Erro ao criar livro" + e.message})
    }
});

app.get('/api/livros', async (req, res) => {
    try{
       const livros = await Livro.find();
       res.json(livros);
    }
    catch(e){
        res.status(500).json({erro: "Erro ao criar livro" + e.message})
    }
});


app.get('/api/livros/:id', async (req, res) => {
    try{
       const {id} = req.params;
       const livro = await Livro.findById(id);

       if(!livro){
        return res.status(404).json({erro: "Nao encontrado"})
       }

       res.json(livro);
    }
    catch(e){
        res.status(500).json({erro: "Erro ao criar livro" + e.message})
    }
});

