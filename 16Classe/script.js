/*
- O prototype do JavaScript pode ser chamado de class
- Pois nas outras linguagens uma Class é um molde de um objeto
- Ou seja, podemos criar diversos objetos em cima de um prototype
*/

let cachorro = { //foi criado um object cachorro
    raca: "srd",
    patas: 4,
    latir: function() {
        console.log("Au au");
    }
}

let labrador = Object.create(cachorro); //foi criado um object pastorAlemao a partir de cachorro

labrador.latir();
labrador.raca = "Labrador"; //foi dito que a raca recebeu o nome pastor alemão, pois agora pastorAlemao virou um object

console.log(labrador.raca); //logo quando chamamos pastorAlemao.raca, ele considera como se fosse cachorro.raca
console.log(cachorro.raca);

let pastor = Object.create(cachorro);  //aqui criamos outra classe

pastor.raca = "Pastor Alemão";

console.log(pastor.raca);

//------------------------------------------
/*Classe: construtor por função
- Construtores são formas de instanciar uma classe.
- Instanciar = criar um objeto novo
- No construtor já podemos definir propriedades
*/

function criarCachorro(raca, patas, cor){
    let cachorro = Object.create({}); //criando um objeto vazio
    cachorro.raca = raca; //criando os objetos 
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function() {
        console.log("Au au");
    }
    return cachorro; //o retorno é para finalizar a criação do objeto
}

let doberman = criarCachorro("Doberman", 4, "Preta");

console.log(doberman);
console.log(doberman.raca);
console.log(doberman.cor);
doberman.latir();

//-----------------------------------------------
//Classes: construtor por new 
/*
- Temos a possibilidade de instanciar um objeto com new
*/

function Cachorro(raca, patas, cor) { //crianção da função por converção
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function() {
        console.log("auuuuuu");
    }
}

let husky = new Cachorro("Husky", 4, "Branco"); //instanciar classe

console.log(husky);
console.log(husky.cor);
console.log(husky.raca);
husky.uivar();

//-------------------------------------------------
//Classes: construtores com método
/*
- Podemos criar a classe base já com métodos
- Basta definir ao prototype o método desejado
*/

function Cachorro(raca, patas, cor) { //criação da classe
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}

Cachorro.prototype.uivar = function() { //podemos entender como a criação de um método
    console.log("auuuuuuuuuuuuuu");
}

let pug = new Cachorro("Pug", 4, "Marrom"); //instancia 

console.log(pug);
console.log(pug.raca);
console.log(pug.cor);
console.log(pug.patas);
pug.uivar();

//-----------------------------------------------------------
//Construtor na Classe (ES6)
/*
- Com a versão do ES6, uma possibilidade de criar uma classe (objeto) com construtor foi adicionada
- Então não precisamos mais criar por meio de uma função
*/

class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor
    }
}

let labrador = new Cachorro("Labrador", 4, "Dourado");

console.log(labrador);
console.log(labrador.raca);
console.log(labrador.patas);
console.log(labrador.cor);

//-------------------------------------------------------------
//- Não podemos adicionar propriedades na classe, só por via prototype
//- A classe só aceita métodos

class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("au au");
    }
}

Cachorro.prototype.patas = 4; //sabemos q todos cachorros tem 4 patas, logo podemos criar um objeto direto para isso usando prototype

let labrador = new Cachorro("Labrador", "Dourado");

console.log(labrador);
console.log(labrador.raca);
console.log(labrador.patas);
console.log(labrador.cor);
labrador.latir();


//-------------------------------------------------------------
//Symbol()
/*
- Propriedade única, que não pode ser alterada e nem criada duas vezes
- Podemos utilizar como uma constantate, só que para propriedade de objeto
*/

class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("au au");
    }
}

Cachorro.prototype.raca = "SRD";

let patas = Symbol(); //definindo que patas não vai ser alterado

Cachorro.prototype[patas] = 4; //definindo um valor padrão inalteravel

let labrador = new Cachorro("Labrador", "Dourado");

console.log(Cachorro.prototype.raca); 
console.log(labrador.raca);

//Acessamdo Symbol
console.log(Cachorro.prototype[patas]);

console.log(labrador[patas]);
