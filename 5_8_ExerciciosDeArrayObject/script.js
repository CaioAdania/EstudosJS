//exercicio1
let numeros = [1, 5, 3, 7, 4];

console.log(numeros[0]);
console.log(numeros[2]);
console.log(numeros[3]);


//exercicio2
let nomes = ["Caio", "Bianka"];
let doces = ["Açai", "M&M", "Donut", "Bolo"];

console.log(nomes.length);
console.log(doces.length);



//exercicio3
let onibus = {
    rodas : 8,
    limitedepassageiros : 40,
    portas : 2
}

console.log(onibus.rodas);
console.log(onibus.limitedepassageiros);
console.log(onibus.portas);



//exercicio4
let names = ["Caio", "Bianka", "Adania", "Prata", "Meire"];

if(names.includes("Caio")){
    console.log("Caio lindo demais");
}
else{
    console.log("Não tem");
}


//exercicio5

let numerosPar = [2,4,6,8,10,12,14];
let numerosImpar = [1,3,5,7];

function conferirNumeros(arr) {
    if(arr.length > 5){
        console.log("Muitos elementos")
    }else{
        console.log("Poucos elementos")
    }
}

conferirNumeros(numerosPar);
conferirNumeros(numerosImpar);


//exercicio6

let frutas = ["Melancia", "Maçã", "Banana", "Pêra", "Jaca"];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}


//exercicio7

let carros = "BMW FIAT JAGUAR LANDROVER FERRARI VOLVO";

let carroSeparado = carros.split(" ");

for(let i = 0; i < carroSeparado.length; i++){
    console.log(carroSeparado[i]);
}

//exercicio8

let calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        return a / b;
    }
}

console.log(calculadora.soma(3,4));
console.log(calculadora.subtrair(3,4));
console.log(calculadora.multiplicar(3,4));
console.log(calculadora.dividir(3,4));

//exercicio9 JSON

//Exercicio 1
let computador = {
    "placadevideo" : "RTX3060",
    "teclado" : "Kumara",
    "mouse" : "Kysona"
}

console.log(computador.placadevideo);
console.log(computador.teclado);
console.log(computador.mouse);

