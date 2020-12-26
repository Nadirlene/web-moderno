const pilotos = ['Vettel', 'Alonso', 'Raikkonem', 'Massa']

pilotos.pop()  //remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona elemneto a última posição
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento de um array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiicona elemento a primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos dentro de um array

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array com parte de um array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)  // primeiro elemento inclui, o último nçao
console.log(algunsPilotos2)