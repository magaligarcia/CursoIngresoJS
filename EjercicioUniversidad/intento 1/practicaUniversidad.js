/*
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?*/

function probarEjercicio()
{
	var nombre;
	var carrera;
	var estadoCarrera;
	var sexo;
	var edad;
	var nota;
	var continuarIngresando;
	var contadorProgramacion;
	var contadorPsicologia;
	var contadorDiseñoGrafico;
	var contadorMujeresProgramadoras;
	var contadorNoBinarios;
	var contadorAlumnosFinalizantes;
	var acumuladorNotasAlumnosFinalizantes;
	var promedioNotas;
	var edadAlumnoMasViejo;
	var nombreAlumnoMasViejo;
	var sexoAlumnoMasViejo;
	var notaMejorAlumnoNoBinario;
	var nombreMejorAlumnoNoBinario;
	var estadoMejorAlumnoNoBinario;
	var carreraConMasAlumnos;

	contadorDiseñoGrafico = 0;
	contadorProgramacion = 0;
	contadorPsicologia = 0;
	contadorMujeresProgramadoras = 0;
	contadorNoBinarios = 0;
	contadorAlumnosFinalizantes = 0;
	acumuladorNotasAlumnosFinalizantes = 0;
	edadAlumnoMasViejo = "es el primero";
	notaMejorAlumnoNoBinario = "es el primero";
	continuarIngresando = "si";

	while( continuarIngresando == "si"){
		nombre = prompt("Ingrese el nombre: ");
		while(isNaN(nombre) == false)
		{
			nombre = prompt("ERROR! Ingrese solo letras.");
		}

		carrera = prompt("Ingrese una carrera: Programación, Psicología, Diseño gráfico").toLowerCase();
		while(isNaN(carrera) == false || carrera == " " || carrera != "programación" && carrera != "psicología" && carrera != "diseño gráfico")
		{
			carrera = prompt("ERROR! La carrera debe ser: Programación, Psicología o Diseño gráfico.").toLowerCase();
		}
		//CONTADOR ALUMNOS POR CARRERA
		switch (carrera) { 
			case "programacion":
				contadorProgramacion++;
				break;
			case "psicologia":
				contadorPsicologia++;
				break;
			default:
				contadorDiseñoGrafico++;
				break;
		}
		// CARRERA CON MÁS ALUMNOS
		if(contadorProgramacion > contadorPsicologia && contadorProgramacion > contadorDiseñoGrafico)
		{
			carreraConMasAlumnos = "Programación"
		}else {
			if(contadorPsicologia > contadorDiseñoGrafico){
				carreraConMasAlumnos = "Psicología"
			} else {
				carreraConMasAlumnos = "Diseño Gráfico"
			}
		}

		estadoCarrera = prompt("Ingrese el estado de la carrera: Curso, Abandono o Finalizado").toLowerCase();
		while(estadoCarrera == " " && estadoCarrera != "curso" && estadoCarrera != "abandono" && estadoCarrera != "finalizado")
		{
			estadoCarrera = prompt("ERROR! El estado de la carrera solo puede ser: Curso, Abandono o Finalizado ").toLowerCase();
		}

		sexo = prompt("Ingrese el sexo: femenino, masculino o nobinario (SIN ESPACIOS)").toLowerCase();
		while(isNaN(sexo) == false || sexo == " " || sexo != "femenino" && sexo != "masculino" && sexo != "nobinario"  && sexo == " ")
		{
			sexo = prompt("ERROR! La sexo debe ser: femenino, masculino o nobinario (SIN ESPACIOS)");
		}
		//CONTADOR NO BINARIOS Y MUJERES PROGRAMADORAS 
		switch (sexo) {
			case (sexo =="f" && carrera == "programacion"):
				contadorMujeresProgramadoras++;
				break;
			case "nobinario":
				contadorNoBinarios++;
				break;
		}

		edad = prompt("Ingrese la edad: ");
		edad = parseInt(edad);
		while(isNaN(edad) == true || edad == " " || edad < 18)
		{
			edad = prompt("ERROR! Reingrese la edad");
			edad = parseInt(edad);
		}

		nota = prompt("Ingrese la nota");
		nota = parseInt(nota);
		while(isNaN(nota) == true || nota == " " || nota < 1 || nota > 10)
		{
			nota = prompt("ERROR! Reingrese la nota");
			nota = parseInt(nota);
		}

		if(estadoCarrera == "finalizado")
		{
			acumuladorNotasAlumnosFinalizantes = acumuladorNotasAlumnosFinalizantes + nota;
			contadorAlumnosFinalizantes++;
		}

		if( carrera == "psicologia" && edadAlumnoMasViejo == "es el primero" || edadAlumnoMasViejo < edad  )
		{
			edadAlumnoMasViejo = edad;
			sexoAlumnoMasViejo = sexo;
			nombreAlumnoMasViejo = nombre;
		} 
		
		if(carrera == "psicologia" && sexo == "nobinario" && notaMejorAlumnoNoBinario < nota || notaMejorAlumnoNoBinario == "es el primero"){
			notaMejorAlumnoNoBinario = nota;
			nombreMejorAlumnoNoBinario = nombre;
			estadoMejorAlumnoNoBinario = estadoCarrera;
			}
		
		continuarIngresando = prompt("Desea ingresar otro alumno? SI / NO ").toLowerCase();
		while(continuarIngresando != "si" && continuarIngresando !="no"){
			continuarIngresando = prompt("ERROR! Ingrese SI / NO ").toLowerCase();
		}
	}//FIN INGRESOS
promedioNotas = acumuladorNotasAlumnosFinalizantes / contadorAlumnosFinalizantes;
document.write("Cantidad total de alumnos de cada carrera: " + "<br>" + "Programacion: " + contadorProgramacion + "<br>" + "Psicologia: " + contadorPsicologia + "<br>" + "Diseño Grafico: " + contadorDiseñoGrafico + "<br>");
document.write("Cantidad total de mujeres que cursan la carrera de programación: " + contadorMujeresProgramadoras + "<br>");
document.write("Cantidad de alumnos no binarios." + contadorNoBinarios + "<br>");
if(acumuladorNotasAlumnosFinalizantes == 0){
	document.write("No hay alumnos finalizantes para promediar" + "<br>");
}else {
	document.write("Promedio de notas de los alumnos finalizantes: " + promedioNotas + "<br>");
}

if(edadAlumnoMasViejo == "es el primero"){
	document.write("Alumno mas viejo en la carrera de psicología: No hubo alumnos en la carrera" + "<br>");
}else {
	document.write("Alumno mas viejo en la carrera de psicología: " + nombreAlumnoMasViejo+ ", " + edadAlumnoMasViejo + " años, sexo: " + sexoAlumnoMasViejo + "<br>");
}
document.write("Mejor alumno no binario que estudia psicología: " +nombreMejorAlumnoNoBinario+ ", nota: "+notaMejorAlumnoNoBinario+ " estado de la carrera: "+estadoMejorAlumnoNoBinario+ "<br>");
document.write("la carrera que tiene más alumnos: " +carreraConMasAlumnos);
}
		