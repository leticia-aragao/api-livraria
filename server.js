// criando a aplicação
const express = require('express')
const connectDB = require('./config/config')

const app = express()
connectDB();

app.use(express.json()); // utilizar json no projeto

app.listen(3000, () => console.log("servidor rodando na porta 3000 testando"));

app.get('/dividir', (req, res) => {
    try{
        let numerador = 10;
        let denominador = 0;

        if (denominador === 0)
        {
            throw new Error("Não é possivel dividir por zero.");
        }

        let resultado = numerador / denominador;
        res.json({resultado})
    }
    catch(erro){
        res.status(400).json({error: erro.message});
    }
});