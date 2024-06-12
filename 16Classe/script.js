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