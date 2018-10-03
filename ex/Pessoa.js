/*
    Para exportar uma classe é necessário utilizar o "export default" que só está
     disponível a partir do ecmascript 2015. O mesmo vale para o "import".
    Afim de atender este problema, é preciso utilizar um transpilador, como o "Babel", por exemplo.

*/
export default class Pessoa{
    constructor($nome){
        this.nome = $nome;
    }

    toString(){
        return 'Pessoa: ' + this.nome;
    }
}