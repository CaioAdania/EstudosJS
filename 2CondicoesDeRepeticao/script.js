//Pode ser formada por dois blocos sendo o if e o else, eles nos traz uma condição que é relacionada a lógica de programação e assim usamos o if e o else. 

let pais = 'EUA';
console.log(`Vivendo em ${pais}`);
if (pais == 'Brasil') {
    console.log('Você é Brasileiro');
}else{
    console.log('Você é Gringo');
}

//--------------------------------------
//**Condição simples** apenas o if(condição) { true }, neste caso, é apenas o if, se a condição for falsa, nada vai acontecer em especial.
//já nesta outra condição com if e else, caso seja verdadeira tem uma coisa para fazer e caso seja falsa tem outra coisa para fazer.

let idade = 19;

if(idade == 19){
	console.log("A idade é = 19");
}
else{
	console.log("não tem 19");
}

//--------------------------------------
//Condições aninhadas, são condições uma dentro da outra, não existe uma regra de aninhamento, dentro do JS temos o else if.

let idade1 = 66;
console.log(`Você tem ${idade} anos.`);
if (idade < 16){
    console.log(`Não vota`);
} else if (idade < 18 || idade > 65){
    console.log('Voto opcional');
} else {
    console.log('Voto obrigatório');
}

//----------------------------------------
//SWITCH, ela tem a possibilidade não só do sim e do não, ela tem a possibilidade de outros valores, de valores fixos, ela não é aplicada para todo tipo de situação.
let agora = new Date();
let diaSem = agora.getDay();

switch(diaSem) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2: 
        console.log('Terça');
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log('Quinta');
        break;
    case 5:
        console.log('Sexta');
        break;
    case 6:
        console.log('Sabado');
        break;
    default:
        console.log('Dia inválido');
        break;
}

//---------------------------------------
//**WHILE**
//Nesta estrutura ele faz a repetição, onde primeiro ele faz o teste lógica e depois executa o bloco.

let c = 1;
while (c <= 6) {
    console.log(`Numero ${c}`);
    c++;
}

//----------------------------------------
//**DO WHILE**
//Nesta estrutura ele faz a repetição de forma invertida, onde primeiro ele executa o bloco e depois ele faz o teste lógico no final.

let d = 1;
do {
    console.log(`Numero ${d}`);
    d++ ;
} while (d <= 2);

//----------------------------------------
//**FOR**
//Nesta estrutura, ele faz a inicialização, o teste lógico e o incremento.
//No inicio da estrutura ele faz a inicialização e o teste lógico e sendo verdadeiro, ele executa o bloco e após isso ele faz o loop e durante esse loop ele faz o incremento.

for(let c = 1; c <= 5; c++) {
    console.log(`Numero ${c}`);
}

//----------------------------------------
//Temos outra forma de usar o for, porem só se enquadra no uso de variáveis compostas e objetos array

let num = [7, 5, 9, 2, 0]

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

/*A posição 0 tem o valor 7
A posição 1 tem o valor 5
A posição 2 tem o valor 9
A posição 3 tem o valor 2
A posição 4 tem o valor 5*/

