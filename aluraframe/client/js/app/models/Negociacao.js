class Negociacao {
    // constructor: defina os atriutos da classe
    // posso receber parâmetros e passar no atributo da classe
    constructor(data, quantidade, valor) {
        // Date: data em javaScript
        //  this: é uma variável implicita que sempre aponta
        // para a instancia que esta executando a operação naquele momento
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this)
    } 
    // get: propriedade de acesso leitura
    get volume() {

        return this._quantidade * this._valor;
    }

    get data() {
        //  getTime(): retorna um número grande com a representação dessa data
         return new Date(this._data.getTime());
    }
    get quantidade() {
       return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}