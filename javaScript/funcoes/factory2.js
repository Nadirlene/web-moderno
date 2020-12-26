 function criarProduto(nome, preço) {
     return {
         nome,
         preço,
         desconto: 0.1
     }
 }

 console.log(criarProduto('Notebook', 2199));
 console.log(criarProduto('NiPad', 1199));