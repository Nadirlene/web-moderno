let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)




// O this dentro de uma função tradicional JS ele varia conforme está sendo chamado, ele aponta para um objeto global quanto no brewser quando no node
// O this na função arrow aponta para o objeto corrente, para esse módulo, o arquivo no qual a função foi definida
