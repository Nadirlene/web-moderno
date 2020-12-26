// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidrok', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 199999, fragil: false},

]

const caro = produto => produto.preco >= 500
const fragilidade = produto => produto.fragil 

const resultado = produtos.filter(caro).filter(fragilidade)
console.log(resultado)