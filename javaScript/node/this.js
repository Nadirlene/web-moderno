console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logoThis() {
    console.log('Dentro de uma funçãp...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}


logoThis()