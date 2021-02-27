/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
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
  numeroIngresado = document.getElementById("txtIdNumero").value;
  numeroIngresado = parseInt(numeroIngresado);
  if(numeroSecreto == numeroIngresado){
    contadorIntentos++; 
    alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos");
  } 
  else {
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
 }
