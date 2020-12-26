function teste1(numero) {
    if (numero > 7)  // sempre que eu não usar as chaves no bloco if ele só considera uma sentença mesmo que a identação esteja correta
        console.log(numero)

    console.log('Final')
}

function teste2(numero) {
    if (numero >7 ); { // cuidado com o ';' não usar com as estruturas de controle
        console.log(numero)
    }

}