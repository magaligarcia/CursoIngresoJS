/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese su sexo:'f' para femenino, 'm' para masculino.").toLowerCase();

	while(sexoIngresado !="f" && sexoIngresado !="m"){
		sexoIngresado = prompt("ERROR! 'f' para femenino, 'm' para masculino.").toLowerCase();
	}

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN