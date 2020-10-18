function calculadora(numero1, numero2, operacao){
    if (validaDados(numero1,numero2)){
        operacao(numero1, numero2);
        console.log("------------------------------------------------------------------")
        console.log("A operação foi realizada com sucesso!")
        console.log("------------------------------------------------------------------")
    }else{
        console.log("------------------------------------------------------------------")
        console.log("Verifique os valores dos parametros da operacao!")
        console.log("------------------------------------------------------------------")
    }
}

function somar(numero1, numero2){
    console.log(numero1+numero2)
}

function subtrair(numero1, numero2){
    console.log(numero1-numero2)
}

function multiplicar(numero1, numero2){
    console.log(numero1*numero2)
}

function divisao(numero1, numero2){
    console.log(numero1/numero2)
}

function validaDados(numero1, numero2){
    return (
        typeof numero1 == "number" &&
        typeof numero2 == "number"
    )
}

calculadora(10,"3",somar)
calculadora(29,8,subtrair)
calculadora(2,60,multiplicar)
calculadora(80,54,divisao)