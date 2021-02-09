/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */

function mostrar()
{
	let numRandom;

	numRandom = Math.floor(Math.random() * 10) + 1;
   
	console.log (numRandom);
	
	if (numRandom > 8)
	{
		alert ("EXCELENTE");
	}
	else
	{
		if (numRandom > 3)
		{
		  alert ("APROBO");
		}
		else
		{
		  alert ("Vamos, la proxima se puede");
		}
	}

	
}//FIN DE LA FUNCIÓN