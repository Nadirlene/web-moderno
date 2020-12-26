const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (i in numeros) {

    if(i == 5) {
        break  // break não age sobre if mas sim sobre o for
    }
    console.log(`${i}= ${numeros[i]}`)

}


console.log('------------------------------------')

for (y in numeros) {
    if(y == 5) {
        continue
    }
    console.log(`${y}= ${numeros[y]}`)
}

console.log('------------------------------------')

externo:  //rótulos -> evitar usar
for (a in numeros) {
    for (b in numeros) {
        if(a == 2 && b == 3) {
            break externo
        }
        console.log(`Par ${a}, ${b}`)
    }
}