function tratarErroELançar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    throw 'mensagem'
    
}

function imprimirNomeGritando(objeto) {

    try {
        console.log(objeto.name.toUpperCase() + '!!!!!')
    } catch (e) {     //captura o erro
        tratarErroELançar(e)
    } finally {   // com ou sem erro esse bloco é executado
        console.log('final')
    }

}

const objeto = {nome: 'Roberto'}
imprimirNomeGritando(objeto)