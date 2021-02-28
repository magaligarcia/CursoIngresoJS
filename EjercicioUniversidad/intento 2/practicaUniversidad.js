/*
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
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
var continuar;
var promedio;

var contadorAlumnosProgramacion;
var contadorAlumnosPsicologia;
var contadorAlumnosDisenioGrafico;
var contadorMujeresProgramadoras;
var contadorAlumnosNoBinarios;
var contadorAlumnosFinalizantes;
var acumuladorNotasAlumnosFinalizantes;
var edadAlumnoMasViejoPsicologia;
var nombreAlumnoMasViejoPsicologia;
var sexoAlumnoMasViejoPsicologia;
var nombreMejorAlumnoNoBinarioPsicologia;
var estadoMejorAlumnoNoBinarioPsicologia;
var notaMejorAlumnoNoBinarioPsicologia;
var carreraConMasAlumnos;

contadorAlumnosProgramacion = 0;
contadorAlumnosPsicologia = 0;
contadorAlumnosDisenioGrafico = 0;
contadorMujeresProgramadoras = 0;
contadorAlumnosNoBinarios = 0;
contadorAlumnosFinalizantes = 0;
notaMejorAlumnoNoBinarioPsicologia =0;
acumuladorNotasAlumnosFinalizantes = 0;


continuar = "si";

while (continuar == "si") {
	nombre = prompt("Ingrese el nombre de alumno: ");
	while (isNaN(nombre) == false || nombre == " ") {
		nombre = prompt("ERROR! Reingrese el nombre de alumno: ");
	}

	carrera = prompt("Ingrese la carrera: Programación, Psicología o Diseño gráfico");
	while (isNaN(carrera) == false || carrera == " " || carrera !="Programación" && carrera !="Psicología" && carrera !="Diseño gráfico")
	{
		carrera = prompt("ERROR! Reingrese: Programación, Psicología o Diseño gráfico");
	}

	estadoCarrera = prompt("Ingrese el estado de la carrera: curso, abandono o finalizado");
	while (isNaN(estadoCarrera) == false || estadoCarrera == " " || estadoCarrera !="curso" && estadoCarrera !="abandono" && estadoCarrera !="finalizado")
	{
		estadoCarrera = prompt("ERROR! Reingrese: curso, abandono o finalizado");
	}
	sexo = prompt("Ingrese el sexo de alumno: femenino, masculino o nobinario");
	while (isNaN(sexo) == false || sexo == " " || sexo !="femenino" && sexo !="masculino" && sexo !="nobinario" ) {
		sexo = prompt("ERROR! Reingrese el sexo de alumno: femenino, masculino o nobinario");
	}

	edad = prompt("Ingrese la edad de alumno: ");
	edad = parseInt(edad);
	while (edad < 18) {
		edad = prompt("ERROR! Debe ser mayor de edad. Reintentelo:");
		edad = parseInt(edad);
	}

	nota = prompt("Ingrese la nota de alumno (entre 1 y 10): ");
	nota = parseInt(nota);
	while (nota < 0 && nota > 11) {
		nota = prompt("ERROR! La nota debe ser entre 1 y 10. Reintentelo:");
		nota = parseInt(nota);
	}
//A. Cantidad total de alumnos de cada carrera.
//B. Cantidad total de mujeres que cursan la carrera de programación
//E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
//F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
	switch (carrera) {
		case "Diseño gráfico":
			contadorAlumnosDisenioGrafico++;
			break;
		case "Programación":
			contadorAlumnosProgramacion++;
			if(sexo == "femenino" && estadoCarrera == "curso"){
				contadorMujeresProgramadoras++;
			}
			break;
		case "Psicología":
			contadorAlumnosPsicologia++;
			if( edadAlumnoMasViejoPsicologia < edad || contadorAlumnosPsicologia == 1 )
			{
				edadAlumnoMasViejoPsicologia = edad;
				nombreAlumnoMasViejoPsicologia = nombre;
				sexoAlumnoMasViejoPsicologia = sexo;
			}
			if(sexo == "nobinario" && nota > notaMejorAlumnoNoBinarioPsicologia)
			{	
				notaMejorAlumnoNoBinarioPsicologia = nota;
				nombreMejorAlumnoNoBinarioPsicologia = nombre;
				estadoMejorAlumnoNoBinarioPsicologia = estadoCarrera;
			}
			break;
	}
//C. Cantidad de alumnos no binarios:
	if(sexo == "nobinario")
	{
		contadorAlumnosNoBinarios++;
	}
// alumnos finalizantes
	if(estadoCarrera == "finalizado")
	{
		contadorAlumnosFinalizantes++;
		acumuladorNotasAlumnosFinalizantes = acumuladorNotasAlumnosFinalizantes + nota;
	}
//G. ¿Cuál es la carrera que tiene más alumnos?
	if(contadorAlumnosProgramacion > contadorAlumnosPsicologia && contadorAlumnosProgramacion > contadorAlumnosDisenioGrafico)
	{
		carreraConMasAlumnos = "Programación";
	} else {
		if(contadorAlumnosDisenioGrafico > contadorAlumnosPsicologia)
		{
			carreraConMasAlumnos = "Diseño Gráfico";
		} else {
			carreraConMasAlumnos = "Psicología";
		}
	}
//VARIABLE DE CONTROL
	continuar = prompt("Desea ingresar otro alumno? SI / NO").toLowerCase();
	while (continuar != "si" && continuar != "no") {
		continuar = prompt("ERROR! Desea ingresar otro alumno? SI / NO").toLowerCase();
	}
}// FIN WHILE INGRESOS

// A. Cantidad alumnos x carrera. 
	document.write("Cantidad total de alumnos de cada carrera." + "<br>" + "PROGRAMACIÓN: " + contadorAlumnosProgramacion + "<br>" + "PSICOLOGÍA: " + contadorAlumnosPsicologia + "<br>" + "DISEÑO GRÁFICO: " + contadorAlumnosDisenioGrafico + "<br>");
// B. Cantidad programadoras 
	document.write("Cantidad total de mujeres que cursan la carrera de programación: " + contadorMujeresProgramadoras + "<br>");
// C. Cantidad de alumnos no binarios.
	document.write("Cantidad de alumnos no binarios: " + contadorAlumnosNoBinarios+ "<br>");
//D. Promedio finalizantes
if(contadorAlumnosFinalizantes == 0){
	document.write("No hay alumnos finalizantes para promediar." + "<br>");
} else {
	promedio = acumuladorNotasAlumnosFinalizantes / contadorAlumnosFinalizantes;
	document.write("Promedio de notas de los alumnos finalizantes: " + promedio + "<br>");
}
// E. el mas viejo en psico
	document.write("Alumno mas viejo en la carrera de psicología:" + "<br>" + 
	"Nombre: "+ nombreAlumnoMasViejoPsicologia + "<br>" +
	"Sexo: " + sexoAlumnoMasViejoPsicologia + "<br>" +
	"Edad: " + edadAlumnoMasViejoPsicologia + "<br>");
// F. El mejor psicologo no binario
if(notaMejorAlumnoNoBinarioPsicologia == 0)
{
	document.write("No hay alumnos no binarios estudiando psicología" + "<br>");
}else {
	document.write("El mejor alumno no binario que estudia psicología:" + "<br>" + 
	"Nombre: " +  nombreMejorAlumnoNoBinarioPsicologia+ "<br>" + 
	"Nota: " + notaMejorAlumnoNoBinarioPsicologia +  "<br>" +
	"Estado de la carrera: " + estadoMejorAlumnoNoBinarioPsicologia + "<br>");
}
// G. carrera con + alumnos:
	document.write("Carrera que tiene más alumnos: " + carreraConMasAlumnos + "<br>");
}// FIN FUNCION
		