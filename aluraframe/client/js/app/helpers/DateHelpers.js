class DateHelper {

    constructor() {
        throw new Error('Está classe não pode ser instanciado');
    }

    
    static dataParaTexto(data) {
        // template string
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    // static: são métodos que invoco diretamente na classe e
    // métodos que pertencem a definição da classe.
    static textoParaData(texto) {
        // expressão regular que verifica se o primeiro numero tem 4, 2 e 2
        // se a expressão segue esse padrão
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error('Deve estar no formata aaaa-mm-dd');
        return new Date(...texto.split('-').map((item, indece) => item - indece % 2));
    }
}