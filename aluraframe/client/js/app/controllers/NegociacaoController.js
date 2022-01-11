class NegociacaoController {

    adiciona(event) {
        // cancela a submissão do formulário
        event.preventDefault();
        alert('Chamei a ação no controller');
        console.log("ibag adiciona()")
    }
}