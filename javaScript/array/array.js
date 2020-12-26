console.log(typeof Array, typeof new Array, typeof[])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = "Paulo"
aprovados.push('Nadi') // adiciona elemento no final
console.log(aprovados.length)

aprovados[9] = 'Jhean'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()  // o método sort altera o array original
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1] )
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')  // O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos. O primeiro elemento é o índice de onde vou começar a trabalhar, o segundo elemento é a quantidade de elementos quem vou excluir, o terceiro é o que vou adicionar. 
console.log(aprovados)
