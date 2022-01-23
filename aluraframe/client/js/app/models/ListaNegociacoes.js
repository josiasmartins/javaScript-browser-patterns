class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    // getter: somente leitura
    get negociacoes() {
        return this._negociacoes;
    }
}