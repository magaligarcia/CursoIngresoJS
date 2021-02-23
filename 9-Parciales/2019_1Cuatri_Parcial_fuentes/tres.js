// Pedir por prompt el precio y el porcentaje de descuento,
//  mostrar el precio final con descuento por id.

function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio = prompt("Ingrese el precio: ");
    descuento = prompt("Ingrese el porcentaje de descuento: ");

    precio = parseFloat(precio);
    descuento= parseInt(descuento);

    precioFinal = precio - (descuento * precio / 100);

    document.getElementById("elPrecioFinal").value = precioFinal;
}
