// Usando a notação literal
const objeto1 = {}
console.log(objeto1)

// Object em JS
console.log(typeof Object, typeof new Object)

const objeto2 = new Object
console.log(objeto2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome // estou tornando essa variável pública
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('CNotebook', 2998, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Nadi', 7980, 4)
const f2 = criarFuncionario('Jhean', 1140, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Nina'
console.log(filha)

// Uma função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)