/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numeroRandomUno;
var numeroRandomDos;
var operacionRandom;
var resultado;

function comenzar()
{
    numeroRandomUno = Math.floor(Math.random() * ((10+1) - 1) + 1);
    numeroRandomDos = Math.floor(Math.random() * ((10+1) - 1) + 1);
	operacionRandom = Math.floor(Math.random() * ((4+1) - 1) + 1);

    document.getElementById("txtIdPrimerNumero").value = numeroRandomUno;
    document.getElementById("txtIdSegundoNumero").value = numeroRandomDos;
    switch (operacionRandom) {
        case 1:
            document.getElementById("txtIdOperador").value = "x";
            resultado = numeroRandomUno * numeroRandomDos;

            break;
        case 2:
            document.getElementById("txtIdOperador").value = "+";
            resultado = numeroRandomUno + numeroRandomDos;
            break;
        case 3:
            document.getElementById("txtIdOperador").value = "-";
            resultado = numeroRandomUno - numeroRandomDos;
            break;
        default:
            document.getElementById("txtIdOperador").value = "/";
            resultado = numeroRandomUno / numeroRandomDos;
            break;
    }

}//FIN DE LA FUNCIÓN
function Responder()
{
    respuesta = document.getElementById("txtIdRespuesta").value;
    respuesta = parseInt(respuesta);

    if(respuesta == resultado){
        alert("Felicitaciones! El resultado es correcto!");
    } else {
        alert("Incorrecto. El resultado era: " + resultado);
    }
	
}//FIN DE LA FUNCIÓN
