/* 
setTimeout(function(){
    console.log('Executando calback...')
    
    setTimeout(function() {
        console.log('Executando calback...')
        
        setTimeout(function() {
            console.log('Executando calback...')

        }, 2000)

    }, 2000)
}, 2000) */

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve('vishhhhh...')
        }, tempo)
    })
}

esperarPor(3000).then(texto => console.log(texto))