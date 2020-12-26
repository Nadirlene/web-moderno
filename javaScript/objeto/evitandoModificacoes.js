// Object.preventExtensions   (não deixa alterar para mais a extensão)
const produto = Object.preventExtensions({
    nome: 'Caderno', preco: 19.99, tag:'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal (selar, não consigo adicionar nem excluir mas posso alterar os existentes)
const pessoa = {nome: 'Nadirlene', idade: 28 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Oliveira'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes

