
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

            // getDate: retorna o dia da data; getMouth: retorna o mes e getFullYear: retorna o ano completo
            let diaMesAno = negociacao.data.getDate() 
            + '/' + (negociacao.data.getMonth() + '/' + 1)
             + negociacao.data.getFullYear();
            console.log(diaMesAno)
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
    .filter(prova => prova.nota >= 7 )
    .map(prova => prova.aluno.nome);
console.log(aprovados)

