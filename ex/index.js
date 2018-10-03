 /*
Obs:
- somente os arquivos referenciados aqui, serão compilados pelo webpack 
- spread (...) gera um clone de um determinado objeto

*/

const produto = {
    nome: "Smart TV LG",
    preco: 1399.00,
    desconto: 0.05
}

function clone(objeto){
    return {
        ...objeto
    }
}

const produtoClone = clone(produto);
produtoClone.nome = "Smart TV Samsung";
console.log(produto, produtoClone);


console.log("pessoa");


