const express = require('express')

const router = express.Router()

const horarios = [
  { id: 1, faixa: '18h', modalidade: 'futsal', preco: 80, disponivel: true },
  { id: 2, faixa: '19h', modalidade: 'volei', preco: 80, disponivel: true },
  { id: 3, faixa: '20h', modalidade: 'basquete', preco: 90, disponivel: false }
]

router.get('/', (req, res) => {
  res.status(200).json(horarios)
})

router.get('/disponiveis', (req, res) => {
  const disponiveis = horarios.filter(horario => horario.disponivel === true)

  res.status(200).json(disponiveis)
})

router.get('/total', (req, res) => {
  res.status(200).json({
    total: horarios.length
  })
})

router.post('/', (req, res) => {
  res.status(201).json({
    mensagem: 'Cadastro de horario realizado'
  })
})

module.exports = router