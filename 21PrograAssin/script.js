//Callbacks
// - Callback é uma função que faz uma ação após algum acontecimento no código
// - Podemos realizar um callback com a função setTimeout, veja:

console.log("ainda não chamou o callback");

setTimeout(function() {
    console.log("Chamou o callback")
}, 2000); //código funciona depois de 2 segundos, 2000 em milissegundos e após isso ele executa a linha interna
console.log("Ainda não chamou o callback2");

//------------------------------
//Promisse
/*
- As promises são ações assíncronas que podem produzir um valor em algum momento no código
- Uma forma de dizer a linguagem que um valor pode estar presente em um futuro do código
- O objeto das promisses é *Promise*, *resolve* é o método que resolve uma *Promise*, o *then* é o que faz ela poder ser executada em um ponto futuro
*/

const promessa = Promise.resolve(4 + 8);

console.log("Algum código");

promessa.then((value) => console.log(`A soma é ${value}`));

//---------------------------

const p = Promise.resolve(5);

console.log("Outros códigos");

console.log(p);

p.then((value) => {return value + 5})
.then((value) => {console.log(value)}); //o then pode ser usado para encadear tmb