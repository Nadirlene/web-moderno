// pessoa -> 123 -> {...}
const pessoa = {nome: 'Nadi'}
pessoa.nome = 'Jhean'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'} ERRo!!

Object.freeze(pessoa)  // congela o objeto

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Nina'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)