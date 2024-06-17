//Regex
/*
- Uma forma de encontrar padrões em uma string, por exemplo: validar se só tem números
- Em vez de criarmos funções complexas, podermos encontrar dados em texto por meio das expressões regulares
- Também chamadas de regex
- Expressões regulares no JS são de um tipo Objeto
- Hã duas formas de instanciar
*/

const reg = new RegExp("bola");

console.log(reg.test("Tem bola?")); //true, string encontrada
console.log(reg.test("Não tem")); //false, string não encontrada

//ou

const reg2 = /bola/;

console.log(reg2.test("Tem bola?")); //true, string encontrada
console.log(reg2.test("Não tem")); //false, string não encontrada

//ou, podemos usar uma forma mais simplificada

console.log(/quadrado/.test("Onde tem um quadrado"));
console.log(/quadrado/.test("Onde tem um retangulo"));


//----------------------------------------
//Verificando padrões com Regex
/*
Depois da definição do padrão por meio da Regex, utilizamos o método test() para verificar se o padrão é retornado, com isso vamos receber de resposta true or false.
*/

console.log(/testando/.test("tteessttaannddoo"));
console.log(/testando/.test("asdtestasd"));

//----------------------------------------
//Conjunto de caracteres
/*
Podemos definir um conjunto de caracteres para encontrar por Regex, basta por entre [ ].
Com um traço podemos definir um intervalo também.
*/

const reg3 = /[0-9]/;

console.log(reg3.test("Temos o número 6")); //true ,todos aceitam pois é de 0-9, todos tem número
console.log(reg3.test("Temos o número 2")); //true
console.log(reg3.test("Temos o número 23")); //true

//-----------------------------------------
//Caracteres Especiais
/*
- \d - Qualquer digito de caractere
- \w - Um caractere alfanumérico (”teste”)
- \s - Qualquer caractere de espaço em branco
- \D - Caractere que não são dígitos
- \W - Caractere não alfanumérico
- \S - Caractere que não seja espaço em branco
- .   - Qualquer caractere, menos nova linha
*/

const pontoRegex = /./; //aceita tudo
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test("123"));

const dRegex = /\d/; //[0-9]
console.log(dRegex.test("asd"));
console.log(dRegex.test("123"));

const dRegex2 = /\D/; // ![0-9]
console.log(dRegex2.test("asd"));
console.log(dRegex2.test("123"));

const sRegex = /\s/; //quando tem espaço em branco
console.log(sRegex.test("asd"));
console.log(sRegex.test("123"));

const sRegex2 = /\S/;//quando não tem espaço em branco
console.log(sRegex2.test("asd"));
console.log(sRegex2.test("123"));

const wRegex = /\w/; //só aceita números e letras
console.log(wRegex.test("asd"));
console.log(wRegex.test("123"));

//---------------------------------

const ano = /\d\d\d\d/; //verificando se são 4 numeros
console.log(ano.test("05"));
console.log(ano.test("2019")); //true
console.log(ano.test("opa"));

const palavraTresLetras = /\w\w\w/; //verificando se são 3 letras
console.log(palavraTresLetras.test("dia")); //true
console.log(palavraTresLetras.test("ano")); //true
console.log(palavraTresLetras.test("oi"));
console.log(palavraTresLetras.test("teste"));

//------------------------------------
//operador not ^
/*
- Podemos escrever um set que aceitam tudo, menos alguns caracteres com o not
- Lembrando que combinações serão aceitas, o negado é apenas se bate com o set
*/
const notab = /[^ab]/;
console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottaz = /[^a-z]/;
console.log(nottaz.test("123 as"));
console.log(nottaz.test("sad"));


//----------------------------------
//operador plus +
//Quando um + está após alguma expressão, este elemento pode se repetir mais de uma vez

let muitosOuPoucosDigitos = /\d+/; //só da false, se não tiver nada ou número
console.log(muitosOuPoucosDigitos.test("123"));
console.log(muitosOuPoucosDigitos.test("123456789"));
console.log(muitosOuPoucosDigitos.test(""));

//Operador ?
//Faz com que o digito anterior seja opcional

const opcional = /Prova\s?\d?/;
console.log(opcional.test("Prova"));
console.log(opcional.test("Prova 1"));
console.log(opcional.test("Prova 2"));

//---------------------------------------
//Ocorrência precisa
//Inserir o número de ocorrência entre { }

const telefone = /\d{4,5}-\d{4}/;
console.log(telefone.test("4004-5050"));
console.log(telefone.test("99999-8080"));
console.log(telefone.test("999-999"));
console.log(telefone.test("9999-9"));

//-----------------------------------------
//Método exec
//Retorna um objeto com algumas informações sobre o Regex

const teste = /\d+/.exec("O número 100");

console.log(teste);
console.log(teste.index);

//------------------------------------------
//choice pattern
//- Podemos colocar uma instrução na regex que funciona como um || das condições

const frutas = /\d+ (bananas|maças|laranjas)/;

console.log(frutas.test("10 bananas"));
console.log(frutas.test("25 batatas"));
console.log(frutas.test("8 laranjas"));

//------------------------------------------
//Pratica

const validarDominio = /www.\w+\.com|com.br/;

console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.google"));
console.log(validarDominio.test("google.com"));
console.log(validarDominio.test("www.google.com.br"));

//--------------------------------------------

const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("teste@email.com"));
console.log(validarEmail.test("email@email"));
console.log(validarEmail.test("ronaldo@yahoo.com.br"));
console.log(validarEmail.test("email.com"));

//--------------------------------------------

const validarDataDeNasc = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarDataDeNasc.test("25/12/2015"));
console.log(validarDataDeNasc.test("25/12/15"));
console.log(validarDataDeNasc.test("2/2/2015"));
console.log(validarDataDeNasc.test("30/02/1999"));