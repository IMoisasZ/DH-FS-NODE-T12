const { parse } = require("date-fns")
const express = require("express")

const app = express()

app.listen(3000, () => {
    console.log("Servidor rodando na porta: 3000")
})

app.get('/calcular/:numero1/:numero2?', (req, res) =>{

    let resultado = 0
    let {numero1, numero2} = req.params;
    if (typeof numero2 == undefined){
        resultado = parseInt(numero1) + parseInt(numero2);
        res.send(" " + resultado)
    }else{
        resultado = parseInt(numero1)
        res.send(" " + resultado)
    } 
})