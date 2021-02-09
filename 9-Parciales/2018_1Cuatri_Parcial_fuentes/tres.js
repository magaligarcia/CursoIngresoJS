// Bienvenidos.
// Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
function mostrar()
{
    var precio;
    var porcentaje;
    var descuento;
    var precioFinal;

    precio = prompt('Ingrese el precio: ');
    porcentaje = prompt('Ingrese el porcentaje de descuento: ');

    precio = parseFloat(precio);
    porcentaje = parseInt(porcentaje);

    descuento = (precio * porcentaje) / 100;

    precioFinal = precio - descuento;

    document.getElementById('elPrecioFinal').value = precioFinal;

}
