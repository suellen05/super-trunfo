const naruto = {
    nome:"Naruto",
    imagem:"img/naruto.png",
    atributos:{
        ataque: 7,
        defesas: 6,
        magia: 2
    }
};

const batman ={
    nome:"Batman",
    imagem:"img/batman.jpg",
    atributos:{
        ataque: 6,
        defesas: 8,
        magia: 0
    }
};

const caitlyn = {
    nome:"Caitlyn",
    imagem: "img/Caitlyn.jpg",
    atributos:{
        ataque: 3,
        defesas: 5,
        magia: 0
}
};

const bulba = {
    nome:"Bulba",
    imagem: "img/Bulba.png",
    atributos:{
        ataque: 7,
        defesas: 5,
        magia: 0
}
};

const harry = {
    nome:"harry",
    imagem: "img/harry.jpg",
    atributos:{
        ataque: 3,
        defesas: 5,
        magia: 0
}
};


const cartas = [ naruto , batman , caitlyn, bulba, hary]; 
let cartaJogador, cartaMaquina;

function SortearCarta(){
    const numeroDeCartas = 5;
    let numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    let numeroCartaMaquina = parseInt(Math.random()*numeroDeCartas);
    while(numeroCartaJogador == numeroCartaMaquina){
        numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    }
    cartaJogador = cartas[numeroCartaJogador];
    cartaMaquina = cartas[numeroCartaMaquina];
    
    ExibirCartaJogador();
}

function ExibirCartaJogador(){
    console.log(cartaJogador);
    let divCartaJogador = document.querySelector("#carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    document.querySelector(".nome-personagem-jogador").innerText = cartaJogador.nome;
    let listaDeAtributosDaCarta = document.querySelector(".atributos-jogador");
    listaDeAtributosDaCarta.innerHTML = PegarAtributos(cartaJogador.atributos);
}

function ExibirCartaMaquina(){

let divCartaMaquina = document.querySelector("#carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    document.querySelector(".nome-personagem-maquina").innerText = cartaMaquina.nome;
    let listaDeAtributosDaCarta = document.querySelector(".atributos-maquina");
    listaDeAtributosDaCarta.innerHTML = PegarAtributos(cartaMaquina.atributos);

}

function PegarAtributosMaquina(){

}

function PegarAtributos(atributosDaCarta){
    let listaDeAtributos = "", botaoRadio="";
    for(let atributo in atributosDaCarta){
        botaoRadio = `<input type ="radio" name"atributo" value="${atributo}">`;
        listaDeAtributos += `<li>${atributo} : ${atributosDaCarta[atributo]} ${botaoRadio}</li>`;
    }
    return listaDeAtributos;
}

const btnSortear = document.querySelector("#btnSortear");
btnSortear.onclick = () => {
    SortearCarta();
    ExibirCartaJogador();
    ExibirCartaMaquina();

document.querySelector("#btnJogar").disabled = false;
};