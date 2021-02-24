/*  Magali Garcia - Div H - EJERCICIO UNO, PARCIAL 2020
    
    Debemos realizar la carga de 5(cinco) productos de prevención de contagio, 
    de cada una debo obtener los siguientes datos: 
    el tipo (validar "barbijo" , "jabón" o "alcohol") , 
    el precio (validar entre 100 y 300),
    la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), la Marca y el fabricante. 
    Se debe Informar al usuario lo siguiente:
        a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
        b) Del tipo con mas unidades, el promedio por compra 
        c) Cuántas unidades de jabones hay en total */
function mostrar()
{
var tipoProducto;
var contadorProductos;
var precio;
var cantidad;
var marca;
var fabricante;
var flagPrimerAlcohol;
var precioAlcoholMasBarato;
var cantidadAlcoholMasBarato;
var fabricanteAlcoholMasBarato;
var flagMayorCantidad;
var flagTipoMayorCantidad;
var promedioDelTipoConMasUnidades;
var contadorJabones;

contadorProductos=0;
contadorJabones=0;
flagPrimerAlcohol="es el primero";
flagMayorCantidad=0;


while(contadorProductos<5)
{
    tipoProducto = prompt("Ingrese el tipo de producto: BARBIJO - JABÓN O ALCOHOL ").toLowerCase();
    while(isNaN(tipoProducto)==false || tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol") //VALIDACION DE TIPO
    {
        tipoProducto = prompt("ERROR! Ingrese el tipo de producto: BARBIJO - JABÓN O ALCOHOL ").toLowerCase();
    }

    precio = prompt("Ingrese el precio (entre 100 y 300)");
    precio = parseInt(precio);
    while(isNaN(precio)==true || precio < 100 || precio > 300)//VALIDACION DE PRECIO 
    {
        precio = prompt("ERROR. El precio debe ser entre 100 y 300:");
        precio = parseInt(precio);
    }

    cantidad = prompt("Ingrese la cantidad de unidades entre 1 y 1000:");
    cantidad = parseInt(cantidad);
    while(isNaN(cantidad)==true || cantidad < 1 || cantidad > 1000)
    {
        cantidad = prompt("ERROR. La cantidad de unidades debe ser entre 1 y 1000:");
        cantidad = parseInt(cantidad);
    }

    marca = prompt("Ingrese la marca del producto:");
    while(isNaN(marca)== false)
    {
        marca = prompt("ERROR. Reingrese la marca del producto:");
    }

    fabricante = prompt("Ingrese el nombre del fabricante: ");
    while(isNaN(fabricante)== false)
    {
        fabricante = prompt("ERROR. Reingrese el nombre del fabricante:");
    }

    if(tipoProducto == "alcohol")
    {
        if(flagPrimerAlcohol == "es el primero") // PRIMER ALCOHOL INGRESADO
        {
            precioAlcoholMasBarato = precio;
            cantidadAlcoholMasBarato = cantidad;
            fabricanteAlcoholMasBarato = fabricante;
            flagPrimerAlcohol="NO es el primero";
        } else {
            if(precio < precioAlcoholMasBarato) // SI NO ES EL PRIMERO, COMPARO PRECIOS
            {
                precioAlcoholMasBarato = precio;
                cantidadAlcoholMasBarato = cantidad;
                fabricanteAlcoholMasBarato = fabricante;
            }
        }
    } else 
    {
        if(tipoProducto == "jabon") // CANTIDAD TOTAL DE JABONES
        {
            contadorJabones = contadorJabones + cantidad;
        }
    }

    if(cantidad>flagMayorCantidad) // Del tipo con mas unidades
    {
        flagMayorCantidad=cantidad;
        flagTipoMayorCantidad=tipoProducto;
    }
    
contadorProductos++;
}//FIN WHILE 5 UNIDADES

promedioDelTipoConMasUnidades = flagMayorCantidad / 5; //el promedio por compra 

document.write("Del más barato de los alcohol, la cantidad de unidades es: "+cantidadAlcoholMasBarato+ " y el fabricante es: "+fabricanteAlcoholMasBarato+"<br>");
document.write("El promedio del tipo con más unidades: "+ +"<br>");
document.write("La cantidad total de jabones es: " +contadorJabones);

}//FIN FUNCION
