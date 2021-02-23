/* 
MAGALI GARCIA DIV H
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
9 bis( se pide el menor de los pares y el mayor de los negativos)
*/


function mostrar()
{
var banderaDelPrimero;
var numeroIngresado;
var numeroMaximo;
var numeroMinimo;
var menorDeLosPares;
var mayorDeLosNegativos;
var respuesta;

banderaDelPrimero="es el primero";
mayorDeLosNegativos=-10000;
respuesta='si';

while( respuesta == "si")
{
	numeroIngresado = prompt('Ingrese un número');
	numeroIngresado = parseInt(numeroIngresado);

	if(banderaDelPrimero == "es el primero" || numeroIngresado<numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
			if(numeroMinimo % 2 == 0){
				menorDeLosPares = numeroMinimo;
			}
		}
	if(numeroIngresado < 0 && numeroIngresado > mayorDeLosNegativos)
	{
		mayorDeLosNegativos = numeroIngresado;
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
	alert("El menor de los pares es: " + menorDeLosPares + " y el mayor de los negativos es: " + mayorDeLosNegativos);

}//FIN DE LA FUNCION


// function mostrar()
// {
// 	var banderaDelPrimero;
// 	var numeroIngresado;
// 	var numeroMaximo;
// 	var numeroMinimo;
// 	var numeroPar;
// 	var menorDeLosPares;
// 	var mayorDeLosNegativos;
// 	var respuesta;

// 	banderaDelPrimero="es el primero";
// 	mayorDeLosNegativos="es el primero";
// 	respuesta='si';
// 	while( respuesta == "si")
// 	{
// 		numeroIngresado = prompt('Ingrese un número');
// 		numeroIngresado = parseInt(numeroIngresado);
	
// 		if(numeroIngresado % 2 == 0)
// 		{
// 			numeroPar = numeroIngresado;
// 			if(numeroPar < menorDeLosPares){
// 				menorDeLosPares = numeroIngresado
// 			}
// 		}
// 	respuesta=prompt("desea continuar? Si/No").toLowerCase();
// 	}

// }//FIN DE LA FUNCION

// /*
// Al presionar el botón pedir  números  hasta que el usuario quiera,
// mostrar el número máximo y el número mínimo ingresado.*/
// function mostrar()
// {	// declarar variables
// 	var banderaDelPrimero;
// 	var numeroIngresado;
// 	var numeroMaximo;
// 	var numeroMinimo;
// 	var respuesta;
// 	//iniciar variables
// 	banderaDelPrimero="es el primero";
// 	respuesta='si';
// 	while(respuesta=="si")
// 	{
// 		numeroIngresado = prompt('Ingrese un número');
// 		numeroIngresado = parseInt(numeroIngresado);
		
// 		if(banderaDelPrimero == "es el primero" || numeroIngresado<numeroMinimo)
// 		{
// 			numeroMinimo = numeroIngresado;
// 		}
// 		if(banderaDelPrimero == "es el primero" || numeroIngresado>numeroMaximo)
// 		{
// 			numeroMaximo = numeroIngresado;
// 			banderaDelPrimero = "No es el primer número";			
// 		}

// 		respuesta=prompt("desea continuar? Si/No").toLowerCase();
// 	}
// 	txtIdMaximo.value=numeroMaximo;
// 	txtIdMinimo.value=numeroMinimo;
// }//FIN DE LA FUNCIÓN