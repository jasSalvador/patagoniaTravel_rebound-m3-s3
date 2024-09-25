//función que utilice una estructura de control de flujo para cambiar el contenido de la página al momento de seleccionar la actividad.
//mostrar/ocultar deportes segun select
let cambioTrekking = document.getElementById('actTrekking')
let cambioNatacion = document.getElementById('actNatacion')
let cambioFerry = document.getElementById('actFerry')

document.getElementById('cambiar').addEventListener('change', function () {
    let cambioActividad = this.value;

    if (cambioActividad == 'natacion') {
        cambioNatacion.style.display = 'block';
        cambioTrekking.style.display = 'none';
        cambioFerry.style.display = 'none';
    } else if (cambioActividad == 'ferry') {
        cambioFerry.style.display = 'block';
        cambioTrekking.style.display = 'none';
        cambioNatacion.style.display = 'none';
    }
    else if (cambioActividad == 'trekking') {
        cambioTrekking.style.display = 'block';
        cambioNatacion.style.display = 'none';
        cambioFerry.style.display = 'none';
    }
});

/*Al momento en que el cursor se coloca encima de la imagen, mediante un event listener se debe visualizar el nombre 
de la actividad, y la ubicación donde se realiza. */
const imagenes = document.querySelectorAll('.imagen'); //para seleccionar todas las imágenes
imagenes.forEach(imagen => {
    const textoOverlay = imagen.querySelector('.texto-overlay');

    //eventListener 
    imagen.addEventListener('mouseenter', () => {
        textoOverlay.style.opacity = '1'; //opacidad
    });

    //eventListener para cuando se saca el cursor de la imagen
    imagen.addEventListener('mouseleave', () => {
        textoOverlay.style.opacity = '0'; //opacidad
    });
});


