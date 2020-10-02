Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimeResultado = function(nota) {
    if(nota.entre(9, 10)) {
        console.log('Quadro de honra')
    
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else{
        console.log('Inválido')
    }
}

imprimeResultado(0)
imprimeResultado(2)
imprimeResultado(5)
imprimeResultado(8)
imprimeResultado(9.8)
imprimeResultado(12)