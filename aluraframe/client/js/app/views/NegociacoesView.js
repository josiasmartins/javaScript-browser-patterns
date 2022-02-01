class NegociacoesView {

    constructor(elemento) {

        this._elemento = elemento;
    }

  _template(model) {
      // retorna uma template string
    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.negociacoes.map(n => 
                     `
                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `
                ).join('')}
            </tbody>
            
            <tfoot>
                    <td colspan="3"></td>
                    <!-- reduce: processa um array e no final de ma um unico resultado -->
                    <td>${model.negociacoes.reduce((total, n) => total + n.volume,0.0)}</td>
            </tfoot>
        </table>
        `;
  }

  update(model) {
      // innerHTML: se passar uma string HTML, ele converte essa string em elementos do DOM
      this._elemento.innerHTML = this._template(model);
  }
}

/** 
 *    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
        </tbody>
        
        <tfoot>
        </tfoot>
    </table>
*/



function somatoria(array) {

    var resultado = 0;
    for (let i = 0; i < array.length; i++) {
        resultado = array[i] + resultado;
    }

    return resultado;
}

function somatoriaFor(array) {
    let resultado = 0;
    array.forEach(item => resultado+= item);
    return resultados;
}

numeros.reduce((total, num) => total * num, 1);

let dobro = numeros.map(function(num) {
    return num * 2;
});
let metade = numeros.map(function(num) {
    return num/2;
});
let raiz = numeros.map(function(num) {
    return Math.sqrt(num);
})