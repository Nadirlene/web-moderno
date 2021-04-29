function soma() {
    let soma = 0
    for (i in arguments) {  
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "teste"))

//O objeto arguments é uma variável local disponível dentro de todas as funções. Você pode referenciar os argumentos de uma função dentro da função usando o objeto arguments. Esse objeto contém um registro para cada argumento fornecido para a função, com o índice do primeiro registro começando em 0.