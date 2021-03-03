/*MAGALI GARCIA - DIV H 
"super chino" :
Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
TipoDeStock("Pedido","sin stock", "con stock")
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)
informar SOLO SI HAY 
a)  el NOMBRE del  mas barato de los elaborados
b)  de los Productos nacionales con stock , el promedio de precio
c)  el porcentaje de productos elaborados por sobre el total
d)  De los tipos de stock , cual tiene mas productos nacionales */

function mostrar()
{
var nombreProducto;
var tipoProducto;
var importeProducto;
var tipoDeStock;
var procedencia;
var peso;
var variableControl;
var nombreMasBaratoElaborados;
var contadorProductosTotalesIngresados;
var precioMasBaratoElaborados;
var contadorProductosNacionalesConStock;
var acumuladorPreciosProductosNacionalesConStock;
var promedioPrecioProductosNacionalesConStock;
var porcentajeProductosElaboradosSobreTotal;
var contadorProductosElaborados;
var contadorProductosNacionalesPedidos;
var contadorProductosNacionalesSinStock;
var contadorProductosNacionales;

contadorProductosTotalesIngresados=0;
contadorProductosNacionalesConStock=0;
contadorProductosElaborados=0;
contadorProductosNacionalesPedidos=0;
contadorProductosNacionalesSinStock=0;
contadorProductosNacionales=0;

acumuladorPreciosProductosNacionalesConStock=0;

variableControl = "si";
while (variableControl =="si") {
    tipoProducto = prompt("Ingrese el tipo de producto (limpieza , comestible , otros): ").toLowerCase();
    while (tipoProducto == " " || tipoProducto != "limpieza" && tipoProducto != "comestible" && tipoProducto != "otros" ) 
    {
        tipoProducto = prompt("ERROR! Debe ser uno de los siguiente tipos: ");
    }
    contadorProductosTotalesIngresados++;

    nombreProducto = prompt("Ingrese el nombre del producto:");

    importeProducto = prompt("Ingrese el importe del producto: (no mayor a 1000 pesos) ");
    importeProducto = parseInt(importeProducto);
    while (importeProducto == " " || importeProducto < 1 || importeProducto > 1000) {
        importeProducto = prompt("ERROR. Reingrese el importe del producto: (no mayor a 1000 pesos) ");
        importeProducto = parseInt(importeProducto);
    }

    tipoDeStock = prompt("Ingrese el tipo de stock:(Pedido, sin stock, con stock) ").toLowerCase();
    while (tipoDeStock == " " || tipoDeStock != "pedido" && tipoDeStock !="sin stock" && tipoDeStock !="con stock") 
    {
        tipoDeStock = prompt("ERROR. Reingrese el tipo de stock:(Pedido, sin stock, con stock) ").toLowerCase();
    }

    procedencia = prompt("Ingrese la procedencia del producto (importado, nacional, elaborado)").toLowerCase();
        while (procedencia == " " || procedencia != "importado" && procedencia !="nacional" && procedencia !="elaborado") 
    {
        procedencia = prompt("ERROR. Reingrese la procedencia del producto (importado, nacional, elaborado)").toLowerCase();
    }

    peso = prompt("Ingrese el peso del producto (no mayor a 30 kilos):");
    peso = parseInt(peso);
        while (peso == " " || peso < 1 || peso > 30) {
            peso = prompt("ERROR. Reingrese el peso del producto (no mayor a 30 kilos):");
            peso = parseInt(peso);
        }

    switch (procedencia) {
        case "elaborado":
            contadorProductosElaborados++;
            if(precioMasBaratoElaborados < importeProducto || contadorProductosElaborados == 1) //a)  el NOMBRE del  mas barato de los elaborados
            {
                nombreMasBaratoElaborados = nombreProducto;
                precioMasBaratoElaborados = importeProducto;
            }//c)  el porcentaje de productos elaborados por sobre el total
        break;
        case "nacional": // De los tipos de stock , cual tiene mas productos nacionales 
        contadorProductosNacionales++;
            if(tipoDeStock == "con stock")//b)  de los Productos nacionales con stock , el promedio de precio
            {
                contadorProductosNacionalesConStock++;
                acumuladorPreciosProductosNacionalesConStock = acumuladorPreciosProductosNacionalesConStock + importeProducto;
            } else {
                if(tipoDeStock == "pedido" )
                {
                    contadorProductosNacionalesPedidos++;
                } else {
                    if(tipoDeStock =="sin stock")
                    {
                        contadorProductosNacionalesSinStock++;
                    }
                }
            }
            break;
    }

    variableControl = prompt("Desea ingresar otro producto? SI / NO ").toLowerCase();
    while (variableControl != "si" && variableControl != "no") {
        variableControl = prompt("ERROR, Ingrese SI / NO ").toLowerCase();
    }
}// fin while ingresos
if(contadorProductosNacionalesConStock > contadorProductosNacionalesPedidos && contadorProductosNacionalesConStock > contadorProductosNacionalesSinStock)
{
    tipoDeStockConMasNacionales = "Con stock";
} else {
    if(contadorProductosNacionalesPedidos > contadorProductosNacionalesSinStock)
    {
        tipoDeStockConMasNacionales = "Pedidos";
    } else {
        tipoDeStockConMasNacionales = "Sin stock";
    }
}

promedioPrecioProductosNacionalesConStock = acumuladorPreciosProductosNacionalesConStock / contadorProductosNacionalesConStock;
porcentajeProductosElaboradosSobreTotal = contadorProductosTotalesIngresados / contadorProductosElaborados;
// a)  el NOMBRE del  mas barato de los elaborados:
if(contadorProductosElaborados != 0)
{
    document.write("El NOMBRE del  mas barato de los elaborados es: "+ nombreMasBaratoElaborados + "<br>");
} else {
    document.write("No se ingresaron productos elaborados para calcular el mas barato. " + "<br>");
}
// b)  de los Productos nacionales con stock , el promedio de precio
if(contadorProductosNacionalesConStock !=0)
{
    document.write("de los Productos nacionales con stock , el promedio de precio es:"+ promedioPrecioProductosNacionalesConStock + "<br>");
} else {
    document.write("No hay Productos nacionales con stock para calcular el promedio del precio" + "<br>");
}
// c)  el porcentaje de productos elaborados por sobre el total
if(contadorProductosElaborados !=0)
{
    document.write("el porcentaje de productos elaborados por sobre el total: "+ porcentajeProductosElaboradosSobreTotal + "<br>");
} else {
    document.write("No se ingresaron productos elaborados para calcular el porcentaje por sobre el total " + "<br>");
}
// d)  De los tipos de stock , cual tiene mas productos nacionales
if(contadorProductosNacionales !=0)
{
   document.write("De los tipos de stock , el que tiene mas productos nacionales es:"+ tipoDeStockConMasNacionales + "<br>"); 
} else {
    document.write("No se ingresaron productos nacionales para saber cual tipo de stock tiene más. " + "<br>");
}

}// fin funcion