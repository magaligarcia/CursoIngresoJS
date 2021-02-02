/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	let importe;
	let descuento;
	let importeFinalConDescuento;

	importe=document.getElementById("txtIdImporte").value;
	importe=parseInt(importe);
	descuento= (importe * 0.25);
	importeFinalConDescuento= (importe - descuento);

	document.getElementById("txtIdResultado").value=importeFinalConDescuento;

}
