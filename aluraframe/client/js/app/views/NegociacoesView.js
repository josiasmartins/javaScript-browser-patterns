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
