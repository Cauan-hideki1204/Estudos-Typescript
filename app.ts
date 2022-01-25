class Carro {
    public modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }

    public acelerar(): void {
        this.velocidade = this.velocidade = 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
}

class Concessionaria {
    private endereco: string 
    private listaDeCarros: Carro[]

    constructor(endereco: string, listaDeCarros: Carro[]) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDecarros(): Carro[] {
        return this.listaDeCarros
    }

}

class Pessoa {
    private nome: string
    private carroPreferido: string;
    private carro: Carro;

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }

    public dizerQueCarroTem(): Carro {
        return this.carro
    }
}

//  ====== CRIAR CARROS ======

let carro1 = new Carro('Ford Ka', 2)
let carro2 = new Carro('Nissa 350z', 2)
let carro3 = new Carro('Amarok', 4)

// ====== MONTAR A LISTA DE CARROS ======

let listaDeCarros: Carro[] = [carro1, carro2, carro3]

let concessionaria = new Concessionaria('Rua Don Joao VI', listaDeCarros)

// ====== COMPRAR CARRO ======

let cliente = new Pessoa('Cauan Hideki', 'Nissa 350z')

concessionaria.mostrarListaDecarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()) {
        // Compra de fato o carro
        console.log(`Cliente comprou o carro ${carro.modelo}`)
        cliente.comprarCarro(carro)
    }
})