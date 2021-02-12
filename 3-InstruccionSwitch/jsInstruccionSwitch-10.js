// Enunciado:
// una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, 
// informar si "Se viaja" o "No se viaja" a ese lugar


function mostrar()
{
	var destinoIngresado;
	var estacionDelAño;

	destinoIngresado = document.getElementById('txtIdDestino').value;
	estacionDelAño = document.getElementById('txtIdEstacion').value;
	
	switch (estacionDelAño) {
		
		case "Invierno": // en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
			switch (destinoIngresado) {
				case "Bariloche":
					alert ("Se viaja");
					break;
				default:
					alert ("No se viaja");
					break;
			}
		break;

		case "Verano": // en Verano: Se viaja a Mar del plata y Cataratas solamente
			switch (destinoIngresado) {
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");					
					break;
				default:
					alert("No se viaja");
					break;
			}
		break;

		case "Otoño": // en Otoño: Se viaja a todos los destinos.
			alert("Se viaja");
		break;
	
		case "Primavera": // primavera: solo no se viaja a Bariloche
			switch (destinoIngresado) {
				case "Bariloche":
					alert("No se viaja");					
					break;
				default:
					alert("Se viaja");
					break;
			}
		break;
	}
}//FIN DE LA FUNCIÓN