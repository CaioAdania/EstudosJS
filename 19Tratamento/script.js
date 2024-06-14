//Tratamento de input por função
// - Não podemos controlar os dados que o usuário enviar, então para o bom funcionamento do software, devemos tratar eles.


function checarNumero(valor) {
    let resultado = Number(valor);
    if(Number.isNaN(resultado)) {
        return console.log("por favor, passe um número para o programa");
    } else {
        return resultado;
    }
}

console.log(checarNumero(5));
console.log(checarNumero("teste"));

//------------------------------------------
//Exception
/*
- Podemos criar erros no programa, caso alguma condição não seja atendida
- Porém as exceptions abortam o programa, só geram o erro.
 */

let a = 1;

if(a != 2) {
    throw new Error("O valor de A não pode ser 1");
}

//----------------------------------------

function saudacao(nome) {
    if(typeof nome != "string"){
        throw new Error("O parâmetro não é um nome");
    } else {
        console.log(`Olá ${nome}.`);
    }
}

saudacao("Matheus");
saudacao(5);

console.log("teste");

//-----------------------------------------------------
//Try Catch
//O bloco try catch, vai tentar executar um código, caso não consiga ele pode retornar o erro que esse código gerou.

try{
    let c = a + b;
} catch(error) {
    console.log("Algo deu errado: " + error);
}

//------------------------------------------------------
//Finally
//Finally é executado independente do resultado do try/catch e pode existir com try e catch ou apenas try
//Finally não é tão utilizado
try {
    let c = a + b 
} catch (error) {
    console.log("Algo deu errado: " + error);
} finally {
    console.log("Executou");
}

//-------------------------------------------------------
//Assertion
//Verificações no programa, que são utilizadas para assegurar que tudo ocorra da forma esperada

let arr = [1,2,3,4,5];
let arr2 = [];

function iterarArray(arr) {
    if(arr.length == 0) {

        throw new Error("O array precisa ter elementos");
    } else {
        for(let i = 0; i < arr.length; i++){
            console.log(arr[i]);
        }
    }
}

iterarArray(arr);
iterarArray(arr2);

