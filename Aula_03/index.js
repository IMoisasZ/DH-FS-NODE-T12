// lista de pets inicial
let pets = [
    {
      nome: 'Yoshi',
      tipo: 'cachorro',
      raca: 'Akita inu',
      idade: 6,
      genero: 'Masculino',
      vacinado: true
    },
    {
      nome: 'Pituco',
      tipo: 'pássaro',
      raca: 'calopsita',
      idade: 3,
      genero: 'Fêmea',
      vacinado: false
    }
  ]

function validaDados(objetoPet){
  return (
    typeof objetoPet.nome == "string" &&
    typeof objetoPet.tipo == "string" &&
    typeof objetoPet.raca == "string" &&
    typeof objetoPet.idade == "number" &&
    typeof objetoPet.genero == "string" &&
    typeof objetoPet.vacinado == "boolean")
}

//função para incluir um pet
function incluirPet(objetoPet){
  if (typeof objetoPet == "object") {
    if (validaDados(objetoPet)){
      pets.push(objetoPet)
      console.log(pets)
  }else{
    console.log("O objeto não atende todas as prorpiedades necessárias!")
  } 
  } else{
    console.log("Informe um objeto para cadastrar um novo pet!")
  }
}

let novoPet = {
  nome: 'Miau',
  tipo: 'gato',
  raca: 'ruim',
  idade: 5,
  genero: 'Fêmea',
  vacinado: true
}
incluirPet(novoPet)