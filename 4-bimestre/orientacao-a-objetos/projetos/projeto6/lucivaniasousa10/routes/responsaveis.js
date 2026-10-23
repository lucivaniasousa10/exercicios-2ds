const express = require('express')

const router = express.Router()

const responsaveis = [
  { id: 1, nome: 'Ana', time: 'Unidos FC' },
  { id: 2, nome: 'Bruno', time: 'Vila Volei' }
]

router.get('/', (req, res) => {
  res.status(200).json(responsaveis)
})

router.get('/total', (req, res) => {
  res.status(200).json({
    total: responsaveis.length
  })
})

module.exports = router