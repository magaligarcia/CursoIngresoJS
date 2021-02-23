/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var contador;
	contador=11; 

	while(contador>1)
	{
		document.write((contador-1) + "<br>");
		contador = contador - 1;
	}

}//FIN DE LA FUNCIÓN