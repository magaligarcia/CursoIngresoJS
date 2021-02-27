/*
MAGALI GARCIA - DIV H - PARCIAL 2020 EJERCICIO 3
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var variableDeControl;
	var mayorTemperatura;
	var nombreConMasTemperatura;
	var cantidadMayoresViudos;
	var hombresSolterosOViudos;
	var contadorMayoresConTemperatura;
	var acumuladorEdadesSolteros;
	var contadorHombresSolteros
	var promedioHombresSolteros

	mayorTemperatura = 0;
	cantidadMayoresViudos = 0;
	hombresSolterosOViudos = 0;
	contadorMayoresConTemperatura = 0;
	acumuladorEdadesSolteros = 0;
	contadorHombresSolteros = 0;
	variableDeControl = "si";

	while (variableDeControl == "si") 
	{
		nombre = prompt("Ingrese el nombre: ");	
		while (isNaN(nombre) == false) {
			nombre = prompt("ERROR! El nombre no puede contener números: ");
		}
		edad = prompt("Ingrese la edad:" );
		edad = parseInt(edad);
		sexo = prompt("Ingrese el sexo. F o M: ").toLowerCase();
		while (sexo != "f" && sexo !="m") {
			sexo = prompt('ERROR! Escriba "F" para femenino y "M para masculino: ').toLowerCase();
		}
		estadoCivil = prompt('Ingrese el estado civil: "Soltero", "Casado" o "Viudo"').toLowerCase();
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"  ) {
			estadoCivil = prompt('ERROR! Ingrese una de las siguientes opciones: "Soltero", "Casado" o "Viudo"').toLowerCase();
		}
		temperaturaCorporal = prompt("Ingrese la temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);
		if(mayorTemperatura < temperaturaCorporal){ // a) PERSONA CON MAS TEMPERATURA
			mayorTemperatura = temperaturaCorporal;
			nombreConMasTemperatura = nombre;
		} 
		if(edad > 17 && estadoCivil == "viudo"){ // b) MAYORES DE EDAD VIUDOS
			cantidadMayoresViudos++;
		}
		if(edad > 60 && temperaturaCorporal > 38){ // d) PERSONAS MAYORES CON TEMPERATURA > 38
			contadorMayoresConTemperatura++;
			}
		switch (estadoCivil) {
			case "soltero": 
				if(sexo == "m"){
					hombresSolterosOViudos++; // c) La cantidad de hombres que hay solteros o viudos.
					acumuladorEdadesSolteros = acumuladorEdadesSolteros + edad;//e) DATOS PARA SACAR EL PROMEDIO
					contadorHombresSolteros++;
				}
			break;
			case "viudo":
					if(sexo == "m"){
						hombresSolterosOViudos++;}
			break;
		}

		variableDeControl = prompt("Desea ingresar otro pasajero? Si/No").toLowerCase();
		while (variableDeControl != "si" && variableDeControl != "no") {
			variableDeControl = prompt("ERROR! Desea ingresar otro pasajero? Si/No").toLowerCase();
		}
	}

	promedioHombresSolteros = acumuladorEdadesSolteros / contadorHombresSolteros; // e) El promedio de edad entre los hombres solteros.

	document.write("El nombre de la persona con mas temperatura es: " + nombreConMasTemperatura + "<br>");
	document.write("La cantidad de mayores de edad viudos: " + cantidadMayoresViudos + "<br>");
	document.write("La cantidad de hombres que hay solteros o viudos: " + hombresSolterosOViudos + "<br>");
	document.write("Personas de la tercera edad con mas de 38 de temperatura: " + contadorMayoresConTemperatura + "<br>");

	if(hombresSolterosOViudos == 0){
		document.write("No hay hombres solteros para promediar la edad");
	}else {
		document.write("El promedio de edad entre los hombres solteros es de: " + promedioHombresSolteros + "<br>");
	}
	
}//FIN FUNCION