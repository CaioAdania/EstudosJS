nomeDaFuncao(); //forma de se declarar uma função
nomeDaFuncao(parametro1, parametro2); //podemos declarar uma função com argumentos

//------------------------------

function escreverNoConsole() {
	console.log("Escrevendo no console");
}
escreverNoConsole();

const textPorParametro = function(texto) {
	console.log(texto);
}
textPorParametro("Testando por Parâmetro!");

const textoNoConsole = function() {
	console.log("Texto no console");
}
textoNoConsole();

//---------------------------

const soma = function(a, b) {
    return a + b;
}
console.log(soma(3, 5));

const saudacao = function(nome) {
    if(nome == "Matheus") {
        return "Olá Matheus";
    }
}
console.log(saudacao("Matheus"));

//------------------------------

function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}
console.log(multiplicarTresNumeros(2, 3, 5));

const mult = multiplicarTresNumeros(5, 4, 8);
console.log("O valor da multa é " + mult);

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode dirigir");
    } else { 
        console.log("Não pode dirigir");
    }
}

console.log(podeDirigir(19, true));
console.log(podeDirigir(17, true));
console.log(podeDirigir(20, false));
console.log(podeDirigir(15, false));

//------------------------------------
//ESCOPO DE FUNÇÕES

let n = 10;

function imprimir() {
    let n = 25;
    console.log(n);  //escopo if, logo retorna 25
}

imprimir();
console.log(n); //escopo global, logo retorna 10

//------------------------------------
//ARROW FUNCTIONS, Outra forma de escrever funções, é bem utilizada nos framework modernos

const parOuImpar = (n) => {
    return n % 2;
}
console.log(parOuImpar(3));

//alternativa

const parOuImpar1 = (n) => n % 2;
console.log(parOuImpar(3));
//--------------------------
let consoleTeste = () => {
    return console.log("Hello World");
}
consoleTeste();

//alternativa

let consoleTeste1  = () => console.log("Hello World");
consoleTeste();
//---------------------------
let soma2 = (a,b) => {
    return a+b;
}
console.log(soma(4,5));

//alternativa

let soma1 = (a,b) => a + b;
console.log(soma(5, 5));

//---------------------------------------
//Podemos passar funções com 2 argumentos e usando somente 1

function nomeComIdade(nome, idade) {
    if(idade == undefined){
        console.log("Seu nome é " + nome);
    }else {
        console.log("Seu nome é " + nome + " e você tem " + idade + " anos");
    }
}
nomeComIdade("João");
nomeComIdade("Jorge", 25);

//-----------------------------------------
//Argumentos com Valor Default

function repetirFrase(frase, n=2) {
    for(let x = 1; x <= n; x++){
        console.log(frase + " " + x);
    }
}

repetirFrase("Testando", 5);
repetirFrase("Só duas Vezes"); //não foi definido um valor, ele manteve o default 
//---------------------
function potencia(base, exp=2){
    return Math.pow(base, exp);
}

console.log(potencia(2)); //não foi definido um valor, logo ele considera o valor default

console.log(potencia(2,2));

console.log(potencia(2,3));

//-----------------------------------------------
//Closure uma função que se lembra do ambiente em que ela foi criada

function armazenarSoma(x) {
    return y => x + y;
}

let soma10 = armazenarSoma(3);
console.log(soma1(5));

let soma20 = armazenarSoma(5);
console.log(soma2(10));

//---------------------------------------------------
//Argumento Recursion, Uma funcionalidade que permite uma função se chamar novamente, e isso pode ser um problema.

function retornarNumeroPar(n) {
    if(n%2 == 0) {
        console.log("n agora é par: " + n);
    } else {
        console.log(n);
        retornarNumeroPar(n -1);
    }
}

retornarNumeroPar(32);

//---------------------------------------------------------
function recursao(n) {
    if(n - 1 < 2) {
        console.log("Recursão parou");
    }else if(n % 2 != 0) {
        console.log("Número ímpar " + n);
        recursao(n - 1);
    }else{
        console.log("Número par " + n);
        recursao(n - 2);
    }
}

recursao(5);
recursao(10);

//---------------------------------------------------------
//