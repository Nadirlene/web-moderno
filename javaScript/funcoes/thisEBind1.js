const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e POO

const falarDePessoas = pessoa.falar.bind(pessoa)
falarDePessoas()
// Bind é  método resposnável por amarrar um determinado objeto para ele ser o dono da execução daquele método, sempre que esse método for chamado.