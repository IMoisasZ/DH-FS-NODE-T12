const json = require("./json")

let pets = [
    {
      nome: 'Yoshi',
      tipo: 'cachorro',
      raca: 'Akita inu',
      idade: 6,
      genero: 'Masculino',
      vacinado: true,
      servicos: []
    },
    {
      nome: 'Pituco',
      tipo: 'pássaro',
      raca: 'calopsita',
      idade: 3,
      genero: 'Fêmea',
      vacinado: false,
      servicos: []
    }
  ]

function cadastrarPetSpredOperator(pets, json){
    let arrayPetsJson = JSON.parse(json);
    pets.push(...arrayPetsJson);
    
    return pets
}

// function cadastrarPetsFor(pets, jason){
//     let arrayPetsJson = JSON.parse(jason)

//     for(let index = 0; index < arrayPetsJson.length; i++){
//         pets.push(arrayPetsJson[index]);
//     }

//     return pets
// }

// cadastrarPetSpredOperator(pets, json)
// console.log(pets)


function filtrarPetPorNome(lista, nomePet){
    let petFiltrados = lista.filter((pets) => {
        return pets.nome == nomePet;
    })
    if (petFiltrados > 0){
        return petFiltrados;
    }else{
        return "Nenhum pet foi encontrado com o nome " + nomePet;
    }
}
console.log(filtrarPetPorNome(pets, 'Yoshi'))