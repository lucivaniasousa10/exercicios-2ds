const express = require("express")
const validarAluguel = require("../middlewares/validarAluguel")

const router = express.Router()

const alugueis = [
    { id: 1, assinante: "Ana", jogo: "Celeste", dias: 5, situacao: "finalizado" },
    { id: 2, assinante: "Bruno", jogo: "Hollow Knight", dias: 10, situacao: "ativo" },
    { id: 3, assinante: "Carla", jogo: "Hades", dias: 3, situacao: "ativo" }
]

router.get("/", (req, res) => {
    let resultado = alugueis

    if (req.query.situacao !== undefined) {
        resultado = resultado.filter(aluguel => aluguel.situacao === req.query.situacao)
    }

    if (req.query.diasMin !== undefined) {
        const diasMin = Number(req.query.diasMin)
        resultado = resultado.filter(aluguel => aluguel.dias >= diasMin)
    }

    res.status(200).json(resultado)
})

router.get("/:id", (req, res, next) => {
    const aluguel = alugueis.find(item => item.id === Number(req.params.id))

    if (!aluguel) {
        const erro = new Error("Aluguel nao encontrado")
        erro.status = 404
        return next(erro)
    }

    res.status(200).json(aluguel)
})

router.post("/", validarAluguel, (req, res) => {
    const maiorId = alugueis.reduce((maior, aluguel) => Math.max(maior, aluguel.id), 0)
    const novoAluguel = {
        id: maiorId + 1,
        assinante: req.body.assinante,
        jogo: req.body.jogo,
        dias: req.body.dias,
        situacao: "reservado"
    }

    alugueis.push(novoAluguel)
    res.status(201).json({ mensagem: "Registro de aluguel criado" })
})

module.exports = router
