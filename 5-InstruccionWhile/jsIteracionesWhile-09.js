/* 
MAGALI GARCIA DIV H
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
*/
/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = prompt('Ingrese un número');
		numeroIngresado = parseInt(numeroIngresado);
		
		if(banderaDelPrimero == "es el primero" || numeroIngresado<numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}
		if(banderaDelPrimero == "es el primero" || numeroIngresado>numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
			banderaDelPrimero = "No es el primer número";			
		}

		respuesta=prompt("desea continuar? Si/No").toLowerCase();
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN