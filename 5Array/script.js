/*
Possibilidade de adicionar um conjunto de valores a uma variável.
O array deve ser escrito entre colchetes, e separando os valores por vírgulas.
A contagem de um Array sempre começa com 0.
*/

let arr = [1, 2, 3 ,4, 5];
let nomes = ["Matheus", "Jorge", "Perez"];
let bool = [true, false, true];

let misturado = [1, "matheus", true];

console.log(arr);
console.log(nomes);
console.log(bool);
console.log(misturado);

//-----------------------------------------------
/*
Podemos acessar um array pelo seu índice, por exemplo: arr[1];
Lembrando que o primeiro índice de um array é sempre 0, ou seja,
para acessar o primeiro elemento: arr[0];
*/

let arr1 = [1, 2, 3 ,4, 5];
let nomes1 = ["Matheus", "Jorge", "Perez"];
let bool1 = [true, false, true];


console.log(arr1[1]);
console.log(nomes1[2]);
console.log(bool1[2]);

console.log(arr1[arr.length - 1]); //para acessar o ultimo elemento 

//---------------------------------------------------
//Loops em Array
/* 
Uma técnica muito utilizada na programação é o loop nos arrays.
Como é uma lista com muitos valores, muitas vezes precisamos ver cada um deles.
*/

let numeros = [1, 5, 10, 15, 20, 25];

for(let i = 0; i <= numeros.length; i++){
    console.log(numeros[i]);
}
//-------------------------------------------------------

let nomes2 = ["Matheus", "Maria", "Jose"];

for(let i = 0; i <= nomes2.length; i++){
    console.log(nomes2[i]);
}

//------------------------------------------------------
//Métodos de Array: push e pop
let pessoas5 = ["Matheus", "João", "Ricardo"];

let pessoaRemovida = pessoas5.pop();//remove alguem do array

pessoas5.push("Kleber");//coloca alguem no array

console.log(pessoas5);
console.log(pessoaRemovida);

//-----------------------------------------------------
//Método de Array: shift e unshift
let frutas = ["Maça", "Melão", "Uva"];

let frutaRemovida = frutas.shift();//remove o primeiro elemento de um array

frutas.unshift("Pêra", "Jabuticaba"); //adicionar um ou mais elementos ao início do array

console.log(frutas);
console.log(frutaRemovida);