//Get E Set
/*
- Get: serve para mostrar o valor de uma propriedade
- Set: serve para alterar o valor de uma propriedade
*/

class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("au au");
    }

    get getCor() {
        return this.cor;
    }

    set setCor(cor) {
        this.cor = cor
    }
}

let pastor = new Cachorro("Pastor Alemão", "Sem cor");

console.log(pastor);

pastor.setCor = "Marrom";

console.log(pastor.getCor);
