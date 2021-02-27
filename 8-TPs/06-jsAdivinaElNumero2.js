/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var numeroIngresado;
var contadorIntentos;

contadorIntentos = 0;

function comenzar()
{
	numeroSecreto = Math.floor(Math.random() * ((100+1) - 1) + 1); //Genero el número RANDOM entre 1 y 100
	console.log("El numero secreto es: " + numeroSecreto);
}

function verificar()
{
	numeroIngresado = document.getElementById("txtIdNumero").value; //TOMO NUMERO
	numeroIngresado = parseInt(numeroIngresado);

	if(numeroSecreto == numeroIngresado){ 
		contadorIntentos++; 
		switch (contadorIntentos) {
		case 1:
			alert("usted es un Psíquico. Adivino al intento: " + contadorIntentos);
			break;
		case 2:
			alert("excelente percepción. Adivino al intento: " + contadorIntentos);
			break;
		case 3:
			alert("Esto es suerte. Adivino al intento: " + contadorIntentos);
			break;
		case 4:
			alert("Excelente técnica. Adivino al intento: " + contadorIntentos);
			break;
		case 5:
			alert("usted está en la media. Adivino al intento: " + contadorIntentos);
			break;
		case (contadorIntentos > 5 && contadorIntentos < 11):
			alert("falta técnica. Adivino al intento: " + contadorIntentos );
			break;
		default:
			alert("afortunado en el amor!! Adivino al intento: " + contadorIntentos);
			break;
	  } 
	  }else {
		if(numeroSecreto < numeroIngresado){
		contadorIntentos++;
		alert("Se pasó el número secreto");
		}
		else {
		  contadorIntentos++;
		  alert("Falta para llegar al número secreto");
		}
	  } 
	  document.getElementById("txtIdIntentos").value = contadorIntentos;
	
}	//FIN FUNCION

