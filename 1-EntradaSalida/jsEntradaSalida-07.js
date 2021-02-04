/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



function sumar()
{	
	var num1;
	var num2;
	var suma;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	suma = parseInt (num1 + num2);

	alert("La suma de los dos números es: " + suma);
}

function restar()
{
	var num1;
	var num2;
	var resta;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	resta = num1 - num2;

	alert("La resta del segundo número al primero es: " + resta);
	
}

function multiplicar()
{ 
	var num1;
	var num2;
	var multiplicacion;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	multiplicacion = num1 * num2;

	alert("El producto de los números es: " +  multiplicacion);
	
}

function dividir()
{
	
	var num1;
	var num2;
	var dividir;

	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	dividir = num1 / num2;

	alert("El cociente entre los dos números es: " + dividir);
	
}

