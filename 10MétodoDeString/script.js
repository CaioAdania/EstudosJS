//Método de string: trim
//Remove tudo que não é string

let nome = "           Matheus  ";
let nomeCorrigido = nome.trim();

console.log(nome);
console.log(nomeCorrigido);

//-----------------------------------------
//Método de String: padStart
//Inserir caracteres antes da String

let milAoContrario = "1";

console.log(milAoContrario.padStart(4, "0")); //no primeiro parâmetro ele diz o tamanho da string e o segundo parâmetro para dizer o que vem antes da string

//-----------------------------------------
//Método de String: split
//divide uma string por um separador, e retorna um array

let frase = "O rato roeu a roupa do rei de roma";

let palavras = frase.split(" ");

console.log(palavras); //lança um Array dividindo cada uma das palavras que são separadas com "ESPAÇO"

//------------------------------------------
//Método de String: join
//junta elementos de um array em uma frase, por meio de um separador

let frase1 = "Testando o método split";

let palavras1 = frase1.split(" ");

let novaFrase = palavras1.join("@"); //coloca algo entra o espaçamento da string

console.log(novaFrase);
console.log(palavras1.join(" "));

//---------------------------------------------
//Método de String: repeat
//Repete uma string de acordo com um parâmetro number

console.log("teste".repeat(5)); //repete 5 vezes, na horizontal sem espaçamento