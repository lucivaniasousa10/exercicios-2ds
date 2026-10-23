const express = require('express')

const router = express.Router()

const horariosRouter = require('./horarios')
const responsaveisRouter = require('./responsaveis')

router.get('/', (req, res) => {
  res.status(200).json({
    mensagem: 'API de Quadra'
  })
})

router.use('/horarios', horariosRouter)
router.use('/responsaveis', responsaveisRouter)

module.exports = router