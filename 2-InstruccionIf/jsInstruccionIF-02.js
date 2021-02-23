Enunciado:
/*GARCIA, MAGALI MARIBEL

Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/
function mostrar()
{var edad;
	edad = document.getElementById("txtIdEdad").value;
edad = parseInt(edad);
if(edad > 17)
{alert ("Mayor de Edad")}
else 
{alert ("Menor de Edad")}
}//FIN DE LA FUNCIÓN