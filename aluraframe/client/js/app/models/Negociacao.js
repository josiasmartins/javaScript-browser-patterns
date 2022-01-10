class Negociacao {
    // constructor: defina os atriutos da classe
    // posso receber parâmetros e passar no atributo da classe
    constructor(data, quantidade, valor) {
        // Date: data em javaScript
        //  this: é uma variável implicita que sempre aponta
        // para a instancia que esta executando a operação naquele momento
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    } 

    getVolume() {

        return this._quantidade * this._valor;
    }

    getData() {
       return this._data;
    }
    getQuantidade() {
       return this._quantidade;
    }

    getValor() {
        return this._valor;
    }
}