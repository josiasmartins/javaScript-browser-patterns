class MensagemView extends View {

    // constructor(elemento) {
    //     this.elemento = elemento;
    // }

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    };

    // update(model) {

    //     this._elemento.innerHTML = this._template(model);
    // }
}