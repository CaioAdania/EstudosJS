/*
Métodos
- Propriedades que servem como funções
- Ou seja, as ações dos objetos
- Invocamos os métodos da mesma maneira que funções
*/

let cachorro = {
    latir: function() {
        console.log("Au au");
    }
}

cachorro.latir();

//--------------------------------------------------

const lobo = {
    uivar: function() {
        console.log("Auuuuuuuuu")
    },
    rosnar: function() {
        console.log("grrrrr");
    }
}

lobo.uivar();
lobo.rosnar();

//---------------------------------------------------
/* 
- Normalmente os métodos interagem com os objetos
- Até mudando os valores das suas propriedades para corresponder a lógica do programa desenvolvido
*/

const pessoa = {
    nome: '',
    setNome: function(novoNome) {
        this.nome = novoNome;
    },
    getNome: function() {
        return this.nome;
    }
}

pessoa.setNome("Matheus");
console.log(pessoa.getNome());

//-----------------------------------------------------

const gato = {
    gatinho: 'nd',
    miau: function() {
        console.log("miauuuuuuu");
    },
    ronronar: function() {
        console.log("grauuuu");
    },
    setGato: function(gato) {
        this.gatinho = gato;
    },
    getGato: function() {
        return this.gatinho
    }
}

console.log(gato.gatinho);
gato.setGato("Kleber");
console.log(gato.getGato());