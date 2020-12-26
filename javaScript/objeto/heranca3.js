const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha01 = Object.create(pai)
filha01.nome = 'Ana'
console.log(filha01.corCabelo)

const filha02 = Object.create(pai, {
    nome: {value: 'Nadi', writable: false, enumerable: true}
})

console.log(filha02.nome)
filha02.nome = 'Bia'
console.log(`${filha02.nome} tem cabelos ${filha02.corCabelo}!`)

console.log(Object.keys(filha01))
console.log(Object.keys(filha02))

for(let key in filha02) {
    filha02.hasOwnProperty(key) ?  // verifica se a propriedade pertence ou não ao objeto que estou percorrendo nesse momento
        console.log(key) : console.log(`Por herança ${key}`)
}