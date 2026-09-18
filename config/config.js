const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/minhaLivrariaDB');
        console.log('MongoDB conectado!');
    }
    catch(erro){
        console.error('Erro ao conectar com o MongoDB:', erro);
        process.exit(1);
    }
}

module.exports = connectDB;