const express = require("express")
const router = express.Router()
const primeiroController = require("../controllers/primeiroController")

router.get('/', primeiroController.home)

router.get('/cumprimentar/:nome', primeiroController.cumprimentar)

router.get('/calcular/:numero1/:numero2?', primeiroController.calcular)

router.get('/query/:nome/:sobrenome?', primeiroController.query)
module.exports = router
