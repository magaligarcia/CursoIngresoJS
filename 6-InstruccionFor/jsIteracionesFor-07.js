/*
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.*/


function mostrar()
{
var numeroIngresado;
var divisor;
var cantidadDivisores;
var i;

cantidadDivisores = 0;
numeroIngresado = prompt("Ingrese el número");
numeroIngresado = parseInt(numeroIngresado);
while (isNaN(numeroIngresado) == true || numeroIngresado == " " || numeroIngresado < 1) 
{
	numeroIngresado = prompt("ERROR! Ingrese el número nuevamente: ");
	numeroIngresado = parseInt(numeroIngresado);
}

for(i=1; i<numeroIngresado; i++)
{
	if(numeroIngresado % i == 0)
	{
	divisor = i;
	cantidadDivisores++;
	document.write("Numero divisor: " + divisor + "<br>");
	}
}
	
	document.write("cantidad de numeros divisores "+cantidadDivisores + "<br>");
}//FIN DE LA FUNCIÓN