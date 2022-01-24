class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    // getter: somente leitura
    get negociacoes() {
        // programação defensiva
        // combina dois array e retorna o array modificado
        return [].concat(this._negociacoes);
    }
}