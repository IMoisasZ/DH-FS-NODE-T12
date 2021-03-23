//criar o um prompt para apresentar o nome solicitado
// let nome = prompt("qual o seu nome?")
// console.log('Nome: '+ nome)

// utilizar o confirm para apresentar o conteudo caso seja maior de idade
// let maiorDeIdade = confirm("Você confirma ter ao minimo 18 anos?")

// if(!maiorDeIdade){
//     window.location.reload()
// }

// selecionando elementos com querySelector e querySelectorAll
// document.querySelector - seleciona apenas primeiro elemento encontrado
// document.querySelectorAll - seleciona todos elementos encontrados retornando uma lista
// Formas de utilizar/selecionar elementos:
// - por ID: document.querySelector('#navbarNav');
// - por Classe: document.querySelector('.navbar-nav');
// - por tag: document.querySelector('ul');
// - por tag com classe: document.querySelector('ul.navbar-nav');
// - por tag com id: document.querySelector('div#navbarNav');

// selecionando elementos apenas pela tag - getElementByTagName
// document.getElementsByTagName('h1') - sempre tem a necessidade de receber como 
// parâmetro uma tag e não podemos utilizar ela junto a classes ou id's. Como por exemplo:
// 'h1.titulo', isso já não funcionaria. Lembrando que caso exista mais de um elemento,
// seleciona todos elementos retornando uma lista, ou, caso não encontre elementos retorna vazio.

// selecionando elementos apenas pelo ID - getElementById
// document.getElementById('navbarNav') - sempre tem a necessidade de receber como 
// parâmetro um ID existente em uma tag. Lembrando, caso exista o elemento com o ID
// retorna o único elemento encontrado (devido ID ser único para cada elemento, portanto,
// este método sempre retornará apenas um elemento), ou, caso não encontre retorna null.

// selecionando elementos apenas pela classe - getElementsByClassName
// document.getElementsByClassName('navbar-nav') - sempre tem a necessidade de receber como 
// parâmetro uma classe existente em uma tag. Lembrando, caso exista o elemento com a classe
// retorna o elemento encontrado ou caso existam mais elementos, retorna uma lista
// , ou, caso não encontre retorna vazio.

let logo = document.querySelector('.logo')
logo.addEventListener('click',()=>{
    alert('passou o mouse no logo')
})
