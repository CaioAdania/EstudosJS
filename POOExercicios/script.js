//criar uma classe com métodos
class Conta{
    constructor(saldo){
        this.saldo = saldo;
    }
    deposito(valor) {
        this.saldo += valor;
    }
    saque(valor) {
        this.saldo -= valor
    }
    
}


let banco = new Conta(1000);

console.log(banco.saldo);

banco.deposito(200);
console.log(banco.saldo);

banco.saque(700);
console.log(banco.saldo);

//-----------------------------------------
/*


*/

class Carrinho{
    constructor(itens, qtdTotal, valorTotal){
        this.itens = itens;
        this.qtdTotal = qtdTotal;
        this.valorTotal = valorTotal;
    }

    addItem(item) {

        let contador = 1;

        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if(contador == 0) {
            this.itens.push(item);
        }

        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }

    removerItem(item){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                let obj = this.tens[itemCarrinho];
                let index = this.itens.findindex(function(obj) { return obj.id == item.id});

                this.itens.splice(index,0);

                this.qtd -= this.items[itemCarrinho].id;
                this.valorTotal -= item.preco * item.qtd;
            }
        }
    }

}

let carrinho = new Carrinho([
    {
        id: 1,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    },
    {
        id:2,
        nome: "Calça",
        qtd: 2,
        preco: 50
    }
], 3, 120);

console.log(carrinho);

carrinho.addItem({id: 1, nome:"Camisa", qtd: 2, preco: 20});

console.log(carrinho);

carrinho.log({id:3, nome:"Boné", qtd: 1, preco: 15});

console.log(carrinho);

carrinho.removeItem({id: 1, nome:"Camisa", qtd:1, preco: 20});

//-------------------------------------------------
class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua){
        this.rua=novaRua
    }

    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }
}

let endereco = new Endereco("Rua das Gaivotas", "Terrário", "São Joaquim", "SC");

console.log(endereco);

endereco.novaRua = "Rua dos Pardais";

console.log(endereco);

endereco.novaCidade = "São Paulo";

console.log(endereco);