const escola =  "Cod3r"
console.log(escola.charAt(4))  //exibe o caracter na posição 4
console.log(escola.charCodeAt(3)) // exibo o valor que ele representa dentro da tabela ask ou  unicode
console.log(escola.indexOf('d'))  //exibe em que posição está o caracter informado nesse exemplo o d
console.log(escola.substring(1))  //exibo a partir do indece informado ( nesse caso o 1) até o final
console.log(escola.substring(0, 3)) //exibe do indice 0 até o índice 3, sem incluir o índice 3.
console.log('Escola ' .concat(escola).concat('!')) // concatena
console.log('Escola ' + escola +'!') // concatena
console.log(escola.replace(3, 'e'))  //substituir o 3 pelo e.
console.log('Ana, Maria, Pedro'.split(',')) // vai gerar 03 elementos de uma array separados por virgula
console.log(escola.toUpperCase())  //passa a string para maiusculo

