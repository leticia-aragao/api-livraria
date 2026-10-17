// criando a aplicação
const express = require('express')
const connectDB = require('./config/config')
const Livro = require('./models/livro')
const Usuario = require('./models/usuario')
const livroRoutes = require('./routes/livroRoutes')
const validarTitulo = require('./middlewares/validarTitulo')

const swaggerUI = require('swagger-ui-express')
const docSwagger = require('./docs/swagger.json')

const app = express()
connectDB();

app.use(express.json()); // utilizar json no projeto
app.use('/api', livroRoutes)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docSwagger))

app.use(express.urlencoded( { extended: true } ));

app.listen(3000, () => console.log("servidor rodando na porta 3000 testando"));

