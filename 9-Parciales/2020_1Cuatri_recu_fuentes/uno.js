/* Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/
function mostrar()
{
var tipo;
var precio;
var cantidad;
var marca;
var fabricante;
var controlIngresos;
var contadorBarbijos;
var contadorAlcoholes;
var contadorJabones;
var acumuladorBarbijos;
var acumuladorJabones;
var acumuladorAlcoholes;
var precioDelJabonMasCaro;
var fabricanteJabonMasCaro;
var cantidadJaboneMasCaro;
var productoConMasUnidades;
var promedio;

contadorBarbijos = 0;
contadorAlcoholes = 0;
contadorJabones = 0;
acumuladorBarbijos = 0;
acumuladorJabones = 0;
acumuladorAlcoholes = 0;

controlIngresos = 0;

while (controlIngresos < 5) {
	tipo = prompt("Ingrese el tipo de producto: barbijo , jabón o alcohol").toLowerCase();
	while (tipo == " " || tipo != "barbijo" && tipo != "jabón" && tipo != "alcohol") 
	{
		tipo = prompt("ERROR! Ingrese: barbijo , jabón o alcohol").toLowerCase();
	}

	precio = prompt("Ingrese el precio del producto entre 100 y 300");
	precio = parseInt(precio);
	while (precio == " " || precio < 100 || precio > 300) 
	{
		precio = prompt("ERROR! Reingrese el precio del producto entre 100 y 300");
		precio = parseInt(precio);
	}

	cantidad = prompt("Ingrese la cantidad. Menor a 1000");
	cantidad = parseInt(cantidad);
	while (cantidad == " " || cantidad < 0 || cantidad > 1000) 
	{
		cantidad = prompt("ERROR! Reingrese una cantidad menor a 1000");
		cantidad = parseInt(cantidad);
	}

	marca = prompt("Ingrese la marca del producto: ");
	while (marca == " ") 
	{
		marca = prompt("ERROR! Reingrese la marca del producto:");
	}

	fabricante = prompt("Ingrese el fabricante: ");
	while (fabricante == " ") 
	{
		fabricante = prompt("ERROR! Reingrese el fabricante:");
	}
	
	switch (tipo)
	{
		case "alcohol":
			contadorAlcoholes++;
			acumuladorAlcoholes = acumuladorAlcoholes + cantidad;
		break;
		case "barbijo":
			contadorBarbijos++;
			acumuladorBarbijos = acumuladorBarbijos + cantidad;
		break;
		case "jabón":
			contadorJabones++;
			acumuladorJabones = acumuladorJabones + cantidad;
			if (precioDelJabonMasCaro > precio || contadorJabones == 1) 
			{
				precioDelJabonMasCaro = precio;
				fabricanteJabonMasCaro = fabricante;
				cantidadJaboneMasCaro = cantidad;				
			}
		break;
	}
controlIngresos++;
}//FIN WHILE INGRESOS
if(acumuladorAlcoholes > acumuladorBarbijos && acumuladorAlcoholes > acumuladorJabones)
{
	productoConMasUnidades = "Alcohol"
	promedio = acumuladorAlcoholes / contadorAlcoholes;
} else {
	if (acumuladorBarbijos > acumuladorJabones)
	{
		productoConMasUnidades = "Barbijo"
		promedio = acumuladorBarbijos / contadorBarbijos;
	} else {
		productoConMasUnidades = "Jabon"
		promedio = acumuladorJabones / contadorJabones;
	}
}
//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
if(contadorJabones != 0)
{
	document.write("El fabricante del jabon más caro es: " + fabricanteJabonMasCaro + "<br>");
} else{
	document.write("La cantidad de unidades del jabon más caro es: " + cantidadJaboneMasCaro + "<br>");
}
//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
	document.write("El tipo con más unidades vendidas es : " + productoConMasUnidades + "<br>");
	document.write("Y el promedio por compra fue de : " + promedio + "<br>");
//c) Cuántas unidades de Barbijos se compraron en total*/
	document.write("La cantidad de barbijos vendidos en total fue: : " + acumuladorBarbijos + "<br>");
}//FIN FUNCION
