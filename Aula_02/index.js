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
  ];

// função para incluir um pet
function incluirPet(nome, tipo, raca, idade, genero, vacinado){
    pets.push({nome:nome, tipo:tipo, raca:raca, idade: idade, genero:genero, vacinado: vacinado})
}
incluirPet("miau","gato","ruim",4,"macho", true)

// função para mostrar a lista de pets com nome e tipo
function listaDePets(){
    for(let i = 0; i < pets.length; i++){
        console.log("Nome do pet: " + pets[i].nome + "\n" + "Tipo do pet: " + pets[i].tipo);
    }
    console.log("A quantidade de pets é: "+ pets.length)
}
listaDePets()

//lista de pets com todas as informações
function mostrarListaDePetsTotal(){
    for(let i in pets){
        console.log(i, pets[i])
    }
}
mostrarListaDePetsTotal()