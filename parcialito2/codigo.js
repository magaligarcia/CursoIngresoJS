/* Una empresa que se dedica a la venta de productos tecnologicos, registra la siguiente informacion
de la cantidad de productos vendidos:

IdProducto (Entre 1 y 1000)
tipo (Drone - camara - Celular)
Origen (China - Tonga - Japon)
cantidad vendida por cada compra
peso en kg del paquete
Fecha de compra (alfanumerico)
precio unitario en dolares. 
Precio total: (el margen de ganancia para todos los productos es del 30%) 

Se calcula para cada venta los siguientes impuestos (en caso de que corresponda):
    Para los productos procedentes de Japon cuyo peso supere los 3 kg se le agrega un impuesto del 5% sobre el 
                    total de la compra.
    Para los productos procedentes de Tonga o China que superen los 2 kg, se le agrega un impuesto del 10% sobre el 
                    total de la compra.
    Para las demas combinaciones no aplica impuesto.
    
Se desea saber:
a) Total que recauda la empresa por productos vendidos procedentes de Tonga.
b) Porcentaje de productos vendidos de cada tipo.
    c) Cantidad de productos de China
d) El pais que mas productos importa
e) Fecha, peso y tipo de la compra mas cara.
f) Sumando cantidad de drones y celulares, que porcentaje del total de productos vendidos representan?
g) IdProducto y Origen del ultimo Drone ingresado.
*/

function mostrar()
{

var IdProducto;
var tipo;
var origen;
var cantidadVendidaXCompra;
var peso;
var fechaCompra;
var precioUnidadDolares;
var precioTotal;
var variableControl;
var acumuladorPrecioPructosJaponMas3Kg;
var acumuladorPrecioProductosTongaChinaMas2Kg;
var acumuladorProductosChina;
var totalProductosJaponMas3KgConImpuestos;
var totalProductosTongaChinaMas2KgConImpuestos;
var porcentajeProductosCadaTipo;
var acumuladorCamaras;
var acumuladorCelulares;
var acumuladorDrones;
var acumuladorProductosVendidosXCompra;

acumuladorPrecioProductosTongaChinaMas2Kg=0;
acumuladorProductosVendidosXCompra
acumuladorPrecioPructosJaponMas3Kg=0;
acumuladorProductosChina=0;
acumuladorCamaras=0;
acumuladorCelulares=0;
acumuladorDrones=0;

variableControl = "si";
while (variableControl == "si") 
{
    IdProducto = prompt("Ingrese Id del producto: (Entre 1 y 1000) ");
    IdProducto = parseInt(IdProducto);
    while (IdProducto == " " || IdProducto < 1 || IdProducto > 1000) 
    {
        IdProducto = prompt("ERROR, Reingrese el Id del producto: (Entre 1 y 1000) ");
        IdProducto = parseInt(IdProducto);
    }
    tipo = prompt("Ingrese tipo de producto (Drone - camara - Celular) ").toLowerCase();
    while (tipo == " " || tipo != "drone" && tipo != "camara" && tipo != "celular" ) {
        tipo = prompt("ERROR, Reingrese tipo de producto (Drone - camara - Celular) ").toLowerCase();
    }
    origen= prompt("Ingrese origen de producto (China - Tonga - Japon)").toLowerCase();
    while (origen == " " || origen != "china" && origen != "tonga" && origen != "japon" ) {
            origen = prompt("ERROR, Reingrese origen de producto (China - Tonga - Japon)").toLowerCase();
        }
    cantidadVendidaXCompra = prompt("Ingrese la cantidad vendida por compra:");
    cantidadVendidaXCompra = parseInt(cantidadVendidaXCompra);
    acumuladorProductosVendidosXCompra = acumuladorProductosVendidosXCompra + cantidadVendidaXCompra;

    peso= prompt("Ingrese el peso en kg del paquete:");
    peso = parseInt(peso);

    fechaCompra = prompt("Ingrese la fecha de compra (alfanumerico)");

    precioUnidadDolares = prompt("Ingrese precio unitario en dolares:");
    precioUnidadDolares = parseInt(precioUnidadDolares);

    precioTotal = precioUnidadDolares * cantidadVendidaXCompra;

    switch (Origen) {
        case "japon":
            acumuladorProductosJapon = acumuladorProductosJapon + cantidadVendidaXCompra;
            if(peso > 3)
            {
                acumuladorPrecioPructosJaponMas3Kg = acumuladorPrecioPructosJaponMas3Kg + precioTotal;
            }
        break;
        case "tonga":
            if(peso > 2)
            {
                acumuladorPrecioProductosTongaChinaMas2Kg = acumuladorPrecioProductosTongaChinaMas2Kg + precioTotal;
            }
        break;
        case "china": 
        acumuladorProductosChina = acumuladorProductosChina + cantidadVendidaXCompra;
            if(peso > 2)
            {
                acumuladorPrecioProductosTongaChinaMas2Kg = acumuladorPrecioProductosTongaChinaMas2Kg + precioTotal;
            }   
        break;
    }// fin switch origen
    switch (tipo) {
        case "camara":
            acumuladorCamaras =  acumuladorCamaras + cantidadVendidaXCompra;
            break;
    
        case "celular":
            acumuladorCelulares = acumuladorCelulares + cantidadVendidaXCompra;
            break;
        case "drone":
            acumuladorDrones =  acumuladorDrones + cantidadVendidaXCompra;
            break;
    }// fin switch tipo



    variableControl = prompt("Desea ingresar otro producto? SI / NO ").toLowerCase();
    while (variableControl != "si" && variableControl != "no") {
        variableControl = prompt("ERROR, Ingrese SI / NO ").toLowerCase();
    }
}//fin while ingresos

totalProductosJaponMas3KgConImpuestos = acumuladorPrecioPructosJaponMas3Kg + (5 * acumuladorPrecioPructosJaponMas3Kg / 100); //impuesto de 5 sobre el total
totalProductosTongaChinaMas2KgConImpuestos = acumuladorPrecioProductosTongaChinaMas2Kg + ( 10 * acumuladorPrecioProductosTongaChinaMas2Kg / 100); //impuesto del 10 sobre el total
porcentajeCamarasVendidas = acumuladorCamaras / acumuladorProductosVendidosXCompra;
if(acumuladorProductosChina != 0)//c) Cantidad de productos de China
{
    document.write("La cantidad de productos de China es: " + acumuladorProductosChina + "<br>");
} else {
    document.write("La cantidad de productos de China es cero"+"<br>");
}
// a) Total que recauda la empresa por productos vendidos procedentes de Tonga.

// b) Porcentaje de productos vendidos de cada tipo.
// d) El pais que mas productos importa //acumalar productos cada pais
// e) Fecha, peso y tipo de la compra mas cara.
// f) Sumando cantidad de drones y celulares, que porcentaje del total de productos vendidos representan?
// g) IdProducto y Origen del ultimo Drone ingresado.
 
}//fin funcion
