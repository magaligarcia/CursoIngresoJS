/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */

 var respuesta;
 var numeroRandomUno;
 var numeroRandomDos;
 var operacionRandom;
 var resultado;
 var temporizador; 
 
 temporizador = 0;
 function comenzar()
 {
     numeroRandomUno = Math.floor(Math.random() * ((10+1) - 1) + 1);
     numeroRandomDos = Math.floor(Math.random() * ((10+1) - 1) + 1);
     operacionRandom = Math.floor(Math.random() * ((4+1) - 1) + 1);
     
     document.getElementById("txtIdPrimerNumero").value = numeroRandomUno;
     document.getElementById("txtIDSegundoNumero").value = numeroRandomDos;

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
     while (temporizador  4) { //roto
         setInterval(function(){
		temporizador++;
        console.log(temporizador);
        },1000);
    }
     
     
 
 };//FIN DE LA FUNCIÓN
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
 