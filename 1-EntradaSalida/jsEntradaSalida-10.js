/*GARCIA, MAGALI MARIBEL

Ejercicio 10 - Entrada/Salida.
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var resultado;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);
	
	// descuento= importe *25 /100;
	descuento = (importe * 0.25);
	resultado = (importe - descuento);

	document.getElementById("txtIdResultado").value = resultado;

}
