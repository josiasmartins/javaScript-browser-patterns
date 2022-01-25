
class NegociacaoController {

    constructor() {
        // bind: mantem uma associação comm document
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacaoView'));

        // update: atulaiza a view
        this._negociacoesView.update(this._listaNegociacoes);
    }

    adiciona(event) {
        // cancela a submissão do formulário
        // TODO: erro no preventDeafult
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._cleanForm();

        this._listaNegociacoes.negociacoes.length = 0;

        console.log(this._listaNegociacoes.negociacoes.length = 0)
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _cleanForm() {
        // reseta o formuulário
        this._inputData.value = '';
        this._inputValor.value = 0;
        this._inputQuantidade.value = 0.0;

        // focus: ganha o focus nesse input
        this._inputData.focus();
    }

}






















function somaDoisNumber(num1, num2) {
    return num1 + num2;
}

// console.log(somaDoisNumber(30, 20));


let numeros = [10, 30];
// console.log(somaDoisNumber(...numeros, 'ibag'));

class Aluno {

    constructor(matricula, nome) {
        this.matricula = matricula;
        this.nome = nome;
    }
}

class Prova {

    constructor(aluno, nota) {
        this.aluno = aluno;
        this.nota = nota;
    }
}

let avaliacoes = [
    new Prova(new Aluno(1, 'Luana'), 8),
    new Prova(new Aluno(2, 'Cássio'), 6),
    new Prova(new Aluno(3, 'Barney'), 9),
    new Prova(new Aluno(4, 'Bira'), 5)
];


let aprovados = avaliacoes
    .filter(prova => prova.nota >= 7)
    .map(prova => prova.aluno.nome);
console.log(aprovados)

