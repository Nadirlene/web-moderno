// callback -> chamar de volta

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
 fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})

//ou

fabricantes.forEach(fabricante=>
    console.log(fabricante))


// callback -> passar uma função que será chamada quando um evento acontecer