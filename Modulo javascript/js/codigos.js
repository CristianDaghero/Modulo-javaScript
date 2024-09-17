// objet event//

function resalta (elEvento) {
    var evento = elEvento || window.Event;
    var tipo = evento.type;

    switch(tipo) {
        case 'mouseover':
            this.style.borderColor = 'white';
            this.style.backgroundColor = 'black';

            breack;

        case 'mouseout':
             this.style.borderColor = 'black';
             this.backgroundColor = 'white';
             
             breack;
    } 
}
 
var seccion = document.getElementById('seccion');

window.onload = function() {
    seccion.onmouseover = 'resalta';
    seccion.onmouseout = 'resalta';
}






