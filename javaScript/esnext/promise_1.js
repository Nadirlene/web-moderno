let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)
})

p.then(function(valor) {
    console.log(valor)
})

// por meio do método then eu acesso a promessa quando o dado for cumprido

const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

 new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Pedro'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)


