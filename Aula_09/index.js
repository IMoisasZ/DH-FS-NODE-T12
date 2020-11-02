// Desafio 1 - trazer a diferenca de dias e meses entre 15/09/2005 e 15/05/2020
// utilizando biblioteca moment
// Desafio 2 - trazer a diferenca de dias e meses entre 15/09/2005 e 15/05/2020
// utilizando biblioteca date-fns

const moment = require("moment")
const dateFNS = require("date-fns")

// let diferencasDias = (dataInicial, DataFinal) =>{
//   let dataI = moment(dataInicial).format("DD/MM/YYYY")
//   let dataF = moment(DataFinal).format("DD/MM/YYYY")
//   return dataI.diff(dataF, "days")
// }
// diferencasDias("2005/09/15","2020/05/15")

let converterDataInicial = moment("2005/09/15")
let converterDataFinal = moment("2020/05/15")

const diferencasMoment = (dataInicial, dataFInal) => {
  let dataI = moment(dataInicial)
  let dataF = moment(dataFInal)
  let diferencaDias = dataF.diff(dataI, "days")
  let diferencaMeses = dataF.diff(dataI, "months")
  console.log("A quantidade de dias de diferença é: "+ diferencaDias + " dias e a quanitade de meses de diferença é: " + diferencaMeses + " meses!")
}


diferencasMoment(converterDataInicial,converterDataFinal)

const diferencasDateFNS = (dataInicial, dataFinal) =>{
  let dataI = new Date(dataInicial)
  let dataF = new Date(dataFinal)

  let diferencaDiasFNS = dateFNS.differenceInDays(dataF, dataI)
  let diferecaMesesFNS = dateFNS.differenceInMonths(dataF, dataI)

  console.log("A quantidade de dias de diferença é: " + diferencaDiasFNS + " dias e a quantidade de meses de diferença é: " + diferencaMesesFNS + " meses!" )
}
diferencasDateFNS()
