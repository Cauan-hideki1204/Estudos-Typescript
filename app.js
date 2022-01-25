"use strict";
class Carro {
    constructor(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    acelerar() {
        this.velocidade = this.velocidade = 10;
    }
    parar() {
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
class Concessionaria {
    constructor(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDecarros() {
        return this.listaDeCarros;
    }
}
class Pessoa {
    constructor(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    dizerNome() {
        return this.nome;
    }
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    comprarCarro(carro) {
        this.carro = carro;
    }
    dizerQueCarroTem() {
        return this.carro;
    }
}
//  ====== CRIAR CARROS ======
let carro1 = new Carro('Ford Ka', 2);
let carro2 = new Carro('Nissa 350z', 2);
let carro3 = new Carro('Amarok', 4);
// ====== MONTAR A LISTA DE CARROS ======
let listaDeCarros = [carro1, carro2, carro3];
let concessionaria = new Concessionaria('Rua Don Joao VI', listaDeCarros);
// ====== COMPRAR CARRO ======
let cliente = new Pessoa('Cauan Hideki', 'Nissa 350z');
concessionaria.mostrarListaDecarros().map((carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // Compra de fato o carro
        console.log(`Cliente comprou o carro ${carro.modelo}`);
        cliente.comprarCarro(carro);
    }
});
