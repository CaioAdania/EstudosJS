/* 
Uma coleção de propriedades, parecidos com arrays
Podemos acessar estas propriedades.
Objeto não precisa de CamelCase, mangini q disse
*/
let cachorro = {
    patas: 4,
    nome: "Shark"
}

console.log(cachorro.patas);
console.log(cachorro.nome);

// [] = array
// {} = objetos

//--------------------------------------------
let pessoa = {
    nome: "Matheus",
    profissao: "Programador",
    idade: 28
}

console.log(pessoa.nome);
console.log(pessoa.idade);

//------------------------------------------------
let cachorro1 = {
    patas: 4,
    nome: "Shark",
    latir: function(){
        console.log("Au Au");  //aqui foi criado um Método 
    }
}

console.log(cachorro1.patas);
console.log(cachorro1.nome);
cachorro.latir();

// [] = array
// {} = objetos

//--------------------------------------------------
//Objetos : Deletando e criando propriedades
let pessoa1 = {
    nome: "Matheus",
    profissao: "Programador",
}

console.log(pessoa1.nome);

delete pessoa1.nome;

console.log(pessoa1.nome);

console.log(pessoa1);

pessoa1.casado = false;

console.log(pessoa1.casado);

//--------------------------------------------------
//Objetos : mais sobre
let objetoA = {
    prop1: "teste",
    prop2: "testando",
}

let objetoB = {
    prop3: "propriedade"
}

Object.assign(objetoA, objetoB); //chamando um método assign, que diz que o método A, vai herdar tudo da B
console.log(objetoA);

//--------------------------------------------------
let carro = {
    porta:2,
    portamalas: "200Litros",
    motor: "2.0"
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true,
}

console.log(carro);

Object.assign(carro, adicionais);
console.log(carro);

//--------------------------------------------------
//Objeto: mais sobre, Keys
let objetoA1 = {
    prop1: "teste",
    prop2: "testando",
}

console.log(Object.keys(objetoA1)); //para identificar qual a Chave, o nome da variável

//-----------------------------------------------------
let obj = {
    chave1: 1,
    chave2: 2,
    chave3: 3,
}

console.log(Object.keys(obj));

//--------------------------------------------------------
