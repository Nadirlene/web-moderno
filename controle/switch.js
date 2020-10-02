const imprimeResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
        case 3: case 2: case 1: case 2:
            console. log('Reprovado')
            break
        default:
            console.log('inválido')

    }
}

imprimeResultado(0)
imprimeResultado(2)
imprimeResultado(5)
imprimeResultado(7.8)
imprimeResultado(9.8)
imprimeResultado(12)