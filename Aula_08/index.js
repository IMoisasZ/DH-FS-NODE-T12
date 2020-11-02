const {listaPets,cadastrarPet, darBanhoNoPet, tosarPet, servicosPrestados,removerPet,campanhaVacinacao} = require("./funcoes-pet")
const json = require("./json")

let pets = [
  {
    id: 1,  
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos: []
  },
  {
    id: 2,
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false,
    servicos: []
  }
];
let novoPet = {
  nome: 'Novo Pet',
  tipo: 'gato',
  raca: 'siames',
  idade: 3,
  genero: 'Fêmea',
  vacinado: false
}

listaPets(pets)
cadastrarPet(pets, novoPet)
darBanhoNoPet()
tosarPet()
servicosPrestados(pets[0], darBanhoNoPet)
servicosPrestados(pets[0], tosarPet)
console.log(filtrarPetPorNome(pets, 'Yoshi'))
console.log(campanhaVacinacao(pets))
removerPet(1,pets)