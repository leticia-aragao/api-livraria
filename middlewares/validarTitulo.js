const validarTitulo = (req, res, next) => {
    const {titulo} = req.body;

    if(!titulo || typeof titulo !== "string" || titulo.length < 3){
        return res.status(400).json({error: "O titulo é obrigatorio e deve ter pelo menos 3 caracteres"})
    }

    next()
}

module.exports = validarTitulo