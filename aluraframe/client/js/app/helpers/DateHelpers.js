class DateHelper {

    constructor() {
        throw new Error('Está classe não pode ser instanciado');
    }

    // static: são métodos que invoco diretamente na classe e
    // métodos que pertencem a definição da classe.
    static textoParaData(texto) {
        return new Date(...texto.split('-').map((item, indece) => item - indece % 2))
    }

    static dataParaTexto(data) {
        return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
    }
}