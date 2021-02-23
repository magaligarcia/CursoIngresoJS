/* GARCIA, MAGALI MARIBEL - SWITCH 09
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de
 una estacion del año y localidad para vacacionar para poder calcular el precio final*/

function mostrar()
{
	var destinoIngresado;
	var estacionDelAño;
	var estadia;
	var mensaje;

	destinoIngresado = document.getElementById('txtIdDestino').value;
	estacionDelAño = document.getElementById('txtIdEstacion').value;
	estadia = 15000;
	estadia = parseInt(estadia);
	mensaje = 'Visitar ' + destinoIngresado + ' en ' + estacionDelAño + ' tiene un precio final de: $'+ estadia;

	// en Invierno: bariloche tiene un aumento del 20% 
	// cataratas y Cordoba tiene un descuento del 10% 
	// Mar del plata tiene un descuento del 20%
	switch(estacionDelAño){
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					estadia = estadia * 1.2
					alert(mensaje);
					break;
				case "Cataratas":
				case "Cordoba":
					estadia = estadia * 0.9
					alert(mensaje);
					break;
				case "Mar del plata":
					estadia = estadia * 0.8
					alert(mensaje);
					break;
				default:
					break;
			}
		break;

	// en Verano: bariloche tiene un descuento del 20% 
	// cataratas y Cordoba tiene un aumento del 10% 
	// Mar del plata tiene un aumento del 20%
		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					estadia = estadia * 0.8
					alert(mensaje);
					break;
				case "Cataratas":
				case "Cordoba":
					estadia = estadia * 1.1
					alert(mensaje);
					break;
				case "Mar del plata":
					estadia = estadia * 1.2
					alert(mensaje);
					break;
				default:
					break;
			}
		break;

	// en Otoño y Primavera: bariloche tiene un aumento del 10% 
	// cataratas tiene un aumento del 10% 
	// Mar del plata tiene un aumento del 10% y 
	// Cordoba tiene el precio sin descuento
		case "Otoño":
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					estadia = estadia * 1.1
					alert(mensaje);
					break;
				default:
					alert(mensaje);
					break;
			}
		break;
	}
}//FIN DE LA FUNCIÓN