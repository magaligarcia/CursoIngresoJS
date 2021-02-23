// Debemos realizar la carga de 5(cinco) productos de prevención de contagio, 
// 			de cada una debo obtener los siguientes datos: 
// 			el tipo (validar "barbijo" , "jabón" o "alcohol") , 
// 			el precio (validar entre 100 y 300),
// 			la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), 
// 			 la Marca y el fabricante. 
// 			Se debe Informar al usuario lo siguiente:
// 			a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
// 			b) Del tipo con mas unidades, el promedio por compra 
// 			c) Cuántas unidades de jabones hay en total
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
var tipoMayorCantidad;
var promedioDelTipoConMasUnidades;
var contadorJabones;

contadorProductos=0;
contadorJabones=0;
flagPrimerAlcohol="es el primero";
flagMayorCantidad=0;


while(contadorProductos<5)
{
    tipoProducto = prompt("Ingrese el tipo de producto: BARBIJO - JABÓN O ALCOHOL ").toLowerCase();
    while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol")
    {
        tipoProducto = prompt("ERROR! Ingrese el tipo de producto: BARBIJO - JABÓN O ALCOHOL ").toLowerCase();
    }
    precio = prompt("Ingrese el precio (entre 100 y 300)");
    precio = parseInt(precio);
    cantidad = prompt("Ingrese la cantidad de unidades entre 1 y 1000:");
    cantidad = parseInt(cantidad);
    marca = prompt("Ingrese la marca del producto:");
    fabricante = prompt("Ingrese el nombre del fabricante: ");

    if(tipoProducto == "alcohol")
    {
        if(flagPrimerAlcohol == "es el primero") // PRIMER ALCOHOL INGRESADO
        {
            precioAlcoholMasBarato = precio;
            cantidadAlcoholMasBarato = cantidad;
            fabricanteAlcoholMasBarato = fabricante;
            flagPrimerAlcohol="NO es el primero";
        } else {
            if(precio < precioAlcoholMasBarato) // COMPARO PRECIOS DE ALCOHOL
            {
                precioAlcoholMasBarato = precio;
                cantidadAlcoholMasBarato = cantidad;
                fabricanteAlcoholMasBarato = fabricante;
            }
        }
    } else 
    {
        if(tipoProducto == "jabon")
        {
            contadorJabones = contadorJabones + cantidad;
        }
    }
    if(cantidad>flagMayorCantidad)
    {
        flagMayorCantidad=cantidad;
        tipoMayorCantidad=tipoProducto;
    }
    

contadorProductos++;
}//FIN WHILE 5 UNIDADES
promedioDelTipoConMasUnidades = 
document.write("Del más barato de los alcohol, la cantidad de unidades es: " +cantidadAlcoholMasBarato+  " y el fabricante es: "+fabricanteAlcoholMasBarato+ " La cantidad total de jabones es: " +contadorJabones);

}//FIN FUNCION
