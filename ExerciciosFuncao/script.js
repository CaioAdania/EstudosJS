function impressao () {
    console.log("Hello World!!");
}

impressao();
//----------------------------------

function idade(q) {
    console.log("Você tem " + q + " Anos");
}

idade(22);

//--------------------------------------

function soma(w, e){
    return w + e; 
}

console.log(soma(2, 3));

//-----------------------------------------

function aleatorio(num) {
    return Math.floor(Math.random() * num) + 1;
}

console.log(aleatorio(10));

//------------------------------------------

function age(t) {
    if(t >= 18){
        console.log(`Você tem ${t} Anos e pode entrar na auto escola`);
    }else{
        console.log(`Você tem ${t} Anos e NÃO pode entrar na auto escola`);
    } 
}
age(15);
age(20);

//-------------------------------------------

function tipoDeDado(y){
    if(typeof y == "number"){
        console.log("isso é do tipo Number");
    } else if(typeof y == "string"){
        console.log("Isso é do tipo String");
    } else if (typeof y == "boolean"){
        console.log("Isso é do tipo Boolean");
    } else {
        console.log("null");
    }
}

tipoDeDado(2);
tipoDeDado("Caio");
tipoDeDado(true);

//-------------------------------------------------

function numero(num){
    return Math.abs(num) 
}

console.log(numero(-20));

//----------------------------------------------------

function texto(u) {
    if(u.length > 10){
        console.log("Texto muito grande");
    } else {
        console.log("Dentro do esperado, (" + u + ")");
    }
}

texto("palmeiras não tem mundial");
texto("mundial");

//--------------------------------------------------------


function caralho(i, o){
    return Math.pow(i, o);
}

console.log(caralho(4 , 2));

//---------------------------------------------------------

function poha(p){
    for(let i = p; i > 0; i--){
        if(i % 2 == 0){
            console.log(i);
        }
    }
}

poha(21);



