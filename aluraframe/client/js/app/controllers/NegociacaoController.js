class NegociacaoController {

    adiciona(event) {
        // cancela a submissão do formulário
        // TODO: erro no preventDeafult
        event.preventDefault();
        // bind: mantem uma associação comm document
        let $ = document.querySelector.bind(document);

        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);
    }
}