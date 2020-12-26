// factory é uma função que no final ela sempre retorna um objeto

// Factory simples
function criarPessoa() {
    return {
        nome:'Nadi',
        sobrenome: 'Oliveira'
    }
}

console.log(criarPessoa())