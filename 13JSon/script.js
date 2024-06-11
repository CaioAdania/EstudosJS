/*
JSon = JavaScript Object Notation.
Utilizado para comunicação entre serviços, ex:back end ↔ front end.
Basicamente um tipo de dado padronizado, que lembra muito os objetos do JavaScript.
*/
let pessoa = {
    "name" : "Matheus",
    "age" : 29,
    "position" : "Developer",
    "languages" : ["PHP", "JavaScript", "Python"]
}

console.log(pessoa.name);
console.log(pessoa.languages);

//Podemos Converter o JSON para uma string de forma fácil, ou também uma string para JSON.

const car = {
    "brand" : "BMW",
    "wheels" : 4,
    "doors" : 2,
    "type" : "Sedan"
}

let jsonToString = JSON.stringify(car);
console.log(jsonToString);

let stringToJson = JSON.parse(jsonToString);
console.log(stringToJson);

//------------------------------------------------

let pessoa1 = {
    "nome" : "Matheus",
    "idade" : 28,
    "profissao" : "Programador",
    "hobbies" : ["Video Game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa1);
console.log(pessoaTexto);

let pessoaJson = JSON.parse(pessoaTexto);
console.log(pessoaJson);
console.log(pessoaJson.hobbies[0]);