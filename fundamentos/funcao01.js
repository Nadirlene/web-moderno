//função sem retorno

function imprimeSoma(a, b) {
    console.log(a + b)
}

imprimeSoma(3, 2)

//função com retorno

function soma(a, b=0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(1))