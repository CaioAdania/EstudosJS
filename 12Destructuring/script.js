//Destructuring Com Objetos
//Podemos definir variáveis com propriedades do objeto com uma notação diferente, chamada destructuring

const person = {
    name: "Jhon",
    lastname: "Doe"
}

const {name: fname, lastname: lname} = person; //criação de variáveis a partide um objeto.

console.log(fname);
console.log(lname);

//-----------------------------------------------

let obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: 2.0
}

const {rodas: vRodas, portas: vPortas, tetosolar: vTetoSolar, motor: vMotor} = obj;

console.log(vRodas);
console.log(vPortas);
console.log(vMotor);
console.log(vTetoSolar);

//------------------------------------------------------
//Destructuring com Array
//Podemos definir variáveis com os valores de um Array utilizando o destructuring.

let nome = ["Matheus", "João", "Pedro"];

let [nomeA, nomeB, nomeC] = nome; //criação de variáveis a partir de um Array

console.log(nomeA);
console.log(nomeB);
console.log(nomeC);

//-------------------------------------------------------

let numeros = [2,4,5,8];

let [num1, num2, num3, num4] = numeros;

console.log(num1);
console.log(num3);
console.log(num2);
console.log(num4);
