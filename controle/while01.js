//focado em repetições quando se tem um número indeterminado de vezes baseada em verdadeiro ou falso

function getInteiroAleatorioentre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioentre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até logo!!!!')
