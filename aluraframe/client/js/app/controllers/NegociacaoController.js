class NegociacaoController {

    constructor() {
        // bind: mantem uma associação comm document
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        // cancela a submissão do formulário
        // TODO: erro no preventDeafult
        event.preventDefault();

        console.log(typeof(this._inputData.value));
        
        console.log(this._inputData.value);
        console.log(negociacao);
         // adicionar a negociacao em uma lista
    }
}