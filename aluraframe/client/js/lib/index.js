// querySelector: e uma API do DOM quer permite buscar elementos
var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

    // evita que o browser recarrega a página
    event.preventDefault;

    var tr = document.createElement('tr');

    campos.forEach(function(campo) {

        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    // createElemente: cria um elemento
    var tdVolume = document.createElement('td')
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume)

    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 2;

    // focus(): método que coloca o focus 
    campos[0].focus()
});