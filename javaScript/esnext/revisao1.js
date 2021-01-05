// let e const
// let escopo de função e bloco
// variável declarada com var não tem excopo de bloco então consigo acessar ela de fora do bloco

{
    var a = 2
    let b = 3
    console.log(b)
}


console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
//é uma expressão que possibilita extrair dados de arrays ou objetos em variáveis distintas.
const [l, e, ...tras] = "Cod3er"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9}
console.log(i, nome)