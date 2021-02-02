/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



function sumar()
{	
	let num1;
	let num2;
	let suma;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	suma = parseInt (num1 + num2);

	alert("La suma de los dos números es: " + suma);
}

function restar()
{
	let num1;
	let num2;
	let resta;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	

	resta = num1 - num2;

	alert("La resta del segundo número al primero es: " + resta);
	
}

function multiplicar()
{ 
	let num1;
	let num2;
	let multiplicacion;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	multiplicacion = num1 * num2;

	alert("El producto de los números es: " +  multiplicacion);
	
}

function dividir()
{
	
	let num1;
	let num2;
	let dividir;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	dividir = num1 / num2;

	alert("El cociente entre los dos números es: " + dividir);
	
}

