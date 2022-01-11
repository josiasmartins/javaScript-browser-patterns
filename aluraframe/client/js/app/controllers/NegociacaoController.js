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
        
        // '2016-11-12'
        // replace: nesse caso, troca todas as '-' por virgula
        let data = new Date(
            // spred operators: ele pega a primeira posição do array e primeiro parâmetro do constructor...até no terceiro.
            ...this._inputData.value
                .split('-')
                // map: percorre o array e cria um novo array
                // segundo parametro: o indece do elemento que está percorrendos
                // arrow function: como só tem uma instrução, ela jã faz o retorno dessa operação
                .map((item, indece) => item - indece % 2)
            );

            let negociacao = new Negociacao(
                data, 
                this._inputQuantidade,
                this._inputValor
            );

            console.log(negociacao);
    }
}