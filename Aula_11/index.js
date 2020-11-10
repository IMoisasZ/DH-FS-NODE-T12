const express = require("express")
//criando aplicação express
const app = express()
//importando rotas da aplicação
const router = require("./routes/routes")
//indicando que a aplicação ira trabalhar 
app.use(router)

app.listen(3000, () => {
    console.log("Servidor rodando na porta: 3000")
})