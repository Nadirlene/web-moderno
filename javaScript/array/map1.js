const numeros = [1, 2, 3, 4, 5]

// For com propósito
let resultado = numeros.map(function(e) {
    return e * 2
})

console.log(resultado, numeros)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = numeros.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)





//Uma função que aceita até três argumentos. O método map chama a função callbackfn uma vez para cada elemento da matriz.
// Chama uma função de retorno de chamada definida em cada elemento de uma matriz e retorna uma matriz que contém os resultados.