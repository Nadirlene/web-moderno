//Recurso novo do ES2015

const pessoa = {
    nome: 'Nadi',
    idade: 28,
    endereço: {
        logradouro: 'Rua ABC',
        número:1000
    }
}

const {nome, idade} = pessoa // a chave extrai da estrutura pessoa os atributos nome e idade.
console.log(nome, idade)

const {nome: n, idade:i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereço: {logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)

const {endereço} = pessoa
console.log(endereço)

/*---------------------------------------------*/

const [n1, , n3, n5, n6=0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8],[9, 6, 8]]
console.log(nota)