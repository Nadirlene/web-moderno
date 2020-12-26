// coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 20

console.log(produto)
delete produto['marca do produto']
delete produto.preco
console.log(produto)

const carro = {
    modelo: 'A4',
    valor : 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua sete',
            numero: 28
        }
    },
    condutores: [{
        nome:'Nadi',
        idade: 28
    }, {
        nome:'Jhean',
        idade: 25
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Avenida g'
console.log(carro.condutores);