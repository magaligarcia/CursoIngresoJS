/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var acumuladorNegativos;
	var contadorNegativos;
	var acumuladorPositivos;
	var contadorPositivos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;

	respuesta="si";
	acumuladaorNegtivos=0;
	acumuladorPositivos=0;
	contadorNegativos=0;
	contadorPositivos=0;
	contadorCeros=0;
	contadorPares=0;

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado > 0)
		{
			acumuladorPositivos = acumuladorPositivos + numeroIngresado;
			contadorPositivos++;
		} else {
			if(numeroIngresado < 0){
				acumuladorNegativos = acumuladorNegativos + numeroIngresado;
				contadorNegativos++;
			} else
			contadorCeros++;
			}
		if(numeroIngresado % 2 == 0)
		{
			contadorPares++;
		}
		
		respuesta=prompt("desea continuar? Si/No").toLowerCase();
		while(respuesta != "si" && respuesta != "no"){
			respuesta=prompt("ERROR. Desea continuar ingresando números? Responda SI o NO: ").toLowerCase();
		}
		
	}//fin del while
	promedioPositivos = acumuladorPositivos / contadorPositivos;
	promedioNegativos = acumuladorNegativos / contadorNegativos;
	diferenciaPositivosNegativos = acumuladorPositivos - acumuladorNegativos;

	document.write(
	". La suma de los negativos es: "+acumuladorNegativos+
	". La suma de los positivos es: "+acumuladorPositivos+
	". La cantidad de positivos es: "+contadorPositivos+
	". La cantidad de negativos es: "+contadorNegativos+
	". La cantidad de ceros es: "+contadorCeros+
	". La cantidad de números pares es: "+contadorPares+
	". El promedio de positivos es: "+promedioPositivos+
	". El promedios de negativos es: "+promedioNegativos+
	". La diferencia entre positivos y negativos es: "+diferenciaPositivosNegativos);
}//FIN DE LA FUNCIÓN