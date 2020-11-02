
const listaPets = (pet) => {
    pets.forEach(pet => {
        console.log("Nome: " + pet.nome + "\n" + "Tipo: " + pet.tipo + "\n")
    });
    console.log("Quantidade de Pets: " + pets.length)
}

const validaDados = (objetoPet) => {
    return (
      typeof objetoPet.nome === 'string' &&
      typeof objetoPet.tipo === 'string' &&
      typeof objetoPet.raca === 'string' &&
      typeof objetoPet.idade === 'number' &&
      typeof objetoPet.genero === 'string' &&
      typeof objetoPet.vacinado === 'boolean'
    ) 
  }

  const cadastrarPet = (pets, objetoPet) => {
    if (typeof objetoPet == "object") {  
      if(validaDados(objetoPet)){
        pets.push(objetoPet)
        console.log(pets)
      } else {
        console.log("O objeto informado não possui todas as propriedades necessárias")
      }
    } else {
      console.log("Informe um objeto para cadastrar um novo pet")
    }
  }

  const servicosPrestados = (pet, servicoRealizado) => {
  servicoRealizado(pet)
}

  const darBanhoNoPet = (pet) => {
    let data = new Date();
    data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    pet.servicos.push("banho na data " + data);
    console.log("O pet " + pet.nome + " tomou banho");
  }
  
  const tosarPet = (pet) => {
    let data = new Date();
    data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
    pet.servicos.push("tosa na data " + data);
    console.log("O pet " + pet.nome + " foi tosado");
  }

  const cadastrarPetsSpreadOperator = (pets, json) => {
    let arrayPetsJson = JSON.parse(json);
    pets.push(...arrayPetsJson)
  
    return pets
  }

  const cadastrarPetsFor = (pets, json) => {
    let arrayPetsJson = JSON.parse(json)
  
    for (let index = 0; index < arrayPetsJson.length; index++) {    
      pets.push(arrayPetsJson[index])
    }
    return pets
  }

  const filtrarPetPorNome = (lista, nomePet) => {
  let petsFiltrados = lista.filter((pet) => {
    return pet.nome == nomePet
  });

  if(petsFiltrados.length > 0){
    return petsFiltrados
  } else {
    return "Nenhum pet foi encontrado com o nome " + nomePet
  }
}

const removerPet = (id, listaPets) => {
    let pet = listaPets.filter((pet) => {
        return pet.id == id
    });
    if(pet.length > 0){
        pets.splice(id - 1, 1)
        console.log(pets)
    }else{
        console.log("Não encontramos nenhm pet com o id: " + id)
    }
}

let vacinados = 0;
let naoVacinados = 0;
let array = [];
const campanhaVacinacao = (pets) => {
  for(let i in pets){
      if (pets[i].vacinado){
          vacinados++
      }else{
          naoVacinados++
      }
      return "Quantidade de pets vacinados é: " + vacinados + " / Quatidade de pets não vacinados é: " + naoVacinados
  }
}

module.exports = {
    listaPets,
    validaDados,
    cadastrarPet,
    servicosPrestados,
    darBanhoNoPet,
    tosarPet,
    cadastrarPetsSpreadOperator,
    cadastrarPetsFor,
    filtrarPetPorNome,
    removerPet,
    campanhaVacinacao
}