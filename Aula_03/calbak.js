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

function servicosPrestados(pet, servico){
  servico(pet);
}

function darBanhoNoPet(pet){
  let dataBanho = new Date
  pets[pet].servicos.push("tomou banho na data: " + dataBanho.getDate()+"/"+(dataBanho.getMonth()+1)+"/"+dataBanho.getFullYear());
  console.log("O servico de tomar banho foi realizado com sucesso no pet " + pets[pet].nome)
}


function tosarPet(pet){
  let dataTosa = new Date
  pets[pet].servicos.push("foi tosado na data: "+ dataTosa.getDate()+"/"+(dataTosa.getMonth()+1)+"/"+dataTosa.getFullYear());
  console.log("O servico de tosa foi realizado com sucesso no pet " + pets[pet].nome)
}

servicosPrestados([0],darBanhoNoPet);
servicosPrestados([0],tosarPet);
servicosPrestados([1],darBanhoNoPet);
servicosPrestados([1],tosarPet);
console.log(pets)