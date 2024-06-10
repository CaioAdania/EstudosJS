//Um objeto pode herdar todas as características do outro, virando uma referência ao mesmo.
let objetoA2 = {
    pontos: 10
}

objetoB2 = objetoA2;

objetoC2 = {
    pontos: 10
}

console.log(objetoA2 == objetoB2); //true
console.log(objetoA2 == objetoC2); //false, ele pode ser idêntico porém não é igual

//---------------------------------
let pessoa = {
    nome: "Matheus"
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: "Matheus"
}

console.log(pessoa == pessoa2); //true
console.log(pessoa3 == pessoa); //false
console.log(pessoa3 == pessoa2); //false

pessoa2.nome = "Pedro";
console.log(pessoa.nome);

pessoa.nome = "Maria";
console.log(pessoa2.nome);
