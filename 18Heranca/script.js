//Herança
/*
- Uma classe que pode herdar propriedades de outra classe por herança
- Para isso utilizamos extends
*/

class Mamifero {
    constructor(patas) { //classe pai da herança
        this.patas = patas;
    }
}

class Cachorro extends Mamifero { //herança que utiliza da palavra extends
    constructor(patas, raca) {
        super(patas, patas); /*uso da palavra super herda da classe pai os parametros, como os parametros não precisam ter o mesmo nome isso pode confundir */
        this.raca = raca;
    }
}

let pug = new Cachorro(4, "Pug");

console.log(pug);

//----------------------------------------

class Mamifero {
    constructor(patas) { //classe pai da herança
        this.patas = patas;
    }
}

let coiote = new Mamifero(4);

console.log(coiote.patas);

class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca;
    }

    latir(){
        console.log("au au");
    }
}

let pug1 = new Cachorro(4, "pug");

console.log(pug.patas);