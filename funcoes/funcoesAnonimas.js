const soma = function (x, y) {
    return x + y
}

const imprimeResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimeResultado(3, 4)