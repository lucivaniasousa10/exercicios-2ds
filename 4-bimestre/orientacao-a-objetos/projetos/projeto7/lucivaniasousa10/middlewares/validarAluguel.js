function validarAluguel(req, res, next) {
    const { assinante, jogo, dias } = req.body || {}

    if (assinante === undefined) {
        return res.status(400).json({ erro: "O campo assinante e obrigatorio" })
    }

    if (jogo === undefined) {
        return res.status(400).json({ erro: "O campo jogo e obrigatorio" })
    }

    if (typeof dias !== "number" || Number.isNaN(dias)) {
        return res.status(400).json({ erro: "O campo dias deve ser um numero" })
    }

    if (dias <= 0) {
        return res.status(400).json({ erro: "O campo dias deve ser maior que zero" })
    }

    next()
}

module.exports = validarAluguel
