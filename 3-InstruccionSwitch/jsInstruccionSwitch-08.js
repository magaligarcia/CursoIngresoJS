/* GARCIA, MAGALI MARIBEL - SWITCH 08
Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */

function mostrar()
{
		var destinoIngresado;
		destinoIngresado = document.getElementById('txtIdDestino').value;
	
		switch (destinoIngresado)
		{
			case "Cataratas":
			case "Mar del plata":
				alert('Hace calor.');
				break;
				
			case "Ushuaia":
			case "Bariloche":
				alert('Hace frio.');
				break;
		}

}//FIN DE LA FUNCIÓN