// Criar de forma literal
function fun1() {}

// Armazenar em uma variável
const fun2 = function() {}

// Armazenar em um array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0] (2, 3))

// Armazenar em um atributo de objeto
const objeto = {}
objeto.falar = function() {return 'Opa'}
console.log(objeto.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}

run (function() {console.log('Executabdo...')})

// Uma função pode retornar/conter uma função
function soma(a , b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3) (4)

const cincoMais = soma (2, 3)
cincoMais(4)