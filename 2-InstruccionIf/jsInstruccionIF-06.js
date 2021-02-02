/*
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

GARCIA, MAGALI MARIBEL
*/


function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	
	if (edad < 13){
		alert("Usted es un niño");
	} else if (edad >= 13 && edad <=17) {
		alert("Usted es un adolescente");		
	} else {
		alert("Usted es mayor de edad");
	}

}//FIN DE LA FUNCIÓN