const home = (req,res) =>{
    res.send("Você está no home page!")
}

const cumprimentar = (req, res)=>{
    let { nome } = req.params

    res.send("Olá, " + nome)
}

const calcular = (req, res) =>{

    let resultado = 0
    let {numero1, numero2} = req.params;
    if (typeof numero2 == undefined){
        resultado = parseInt(numero1) + parseInt(numero2);
        res.send(" " + resultado)
    }else{
        resultado = parseInt(numero1)
        res.send(" " + resultado)
    } 
}

const query = (req, res) =>{
    let {nome} = req.params
    let {sobrenome} = req.query
    let resultado = ""
    if (typeof nome == String && sobrenome == String){
        res.send("As informações digitadas não são texto!")
    }else{
        resultado = "Olá, " + nome + " " + sobrenome
        res.send(resultado) 
    } 
}

module.exports = {
    home,
    cumprimentar,
    calcular,
    query
}