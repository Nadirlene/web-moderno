// par nome/valor
const saudacao = 'Opa' // contexto lexico 1

function exec () {
    const saudacao = 'Falaaaa' // contexto lexico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Nadi',
    idade: 32,
    peso: 60,
    endereço: {
        logradouro: 'Rua sete',
        numero: 122
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)