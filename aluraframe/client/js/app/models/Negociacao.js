class Negociacao {
    // constructor: defina os atriutos da classe
    // posso receber parâmetros e passar no atributo da classe
    constructor(data, quantidade, valor) {
        // Date: data em javaScript
        //  this: é uma variável implicita que sempre aponta
        // para a instancia que esta executando a operação naquele momento
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    } 

    obtemVolume() {

        return this.quantidade * this.valor
    }
}