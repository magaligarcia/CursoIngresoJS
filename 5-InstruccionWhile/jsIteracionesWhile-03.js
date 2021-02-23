/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var intentos;
	claveIngresada = prompt("ingrese el número clave.");
	intentos = 0;

	while(claveIngresada != "utn750" || intentos>3)
	{
		claveIngresada = prompt("ERROR! ingrese la clave correcta");
		intentos = intentos + 1;
	}
}//FIN DE LA FUNCIÓN
