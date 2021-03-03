/*Enunciado:1
 Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos */

function mostrar() {
    var variableControl;
    var nombreProducto;
    var tipoProducto;
    var precio;
    var cantidadUnidades;
    var tipoInflamable;
    var marca;
    var acumuladorAlcoholes;
    var acumuladorIac;
    var acumuladorQuat;
    var contadorIngresosAlcoholes;
    var contadorIngresosIac;
    var contadorIngresosQuat;
    var promedioCantidadAlcholes;
    var promedioCantidadIac;
    var promedioCantidadQuart;
    var acumuladorExplosivos;
    var acumuladorIgnifugos;
    var acumuladorCombustibles;
    var acumuladorCantidadIACmenorA200;
    var contadorTotalProductos;
    var precioDelMasCaro;

    acumuladorAlcoholes =0;
    acumuladorIac =0;
    acumuladorQuat = 0;
    acumuladorCantidadIACmenorA200 = 0;

    contadorIngresosAlcoholes = 0;
    contadorIngresosIac = 0;
    contadorIngresosQuat = 0;
    contadorTotalProductos = 0;

    variableControl = 0;
    while (variableControl < 5) {
        nombreProducto = prompt("Ingrese el nombre del producto: ");

        tipoProducto = prompt("Ingrese tipo de producto ( ALCOHOL, IAC o QUAT) : ").toUpperCase();
        while (tipoProducto == " " || tipoProducto != "ALCOHOL" && tipoProducto != "IAC" && tipoProducto != "QUAT") {
            tipoProducto = prompt("ERROR. Reingrese tipo de producto ( ALCOHOL, IAC o QUAT) : ").toUpperCase();
        }

        precio = prompt("Ingrese precio entre 100 y 300: ");
        precio = parseInt(precio);
        while (precio == " " || precio < 100 || precio > 300) {
            precio = prompt("ERROR. Reingrese el precio entre 100 y 300").toUpperCase();
            precio = parseInt(precio);
        }

        cantidadUnidades = prompt("Ingrese cantidad de Unidades menor a 1000: ");
        cantidadUnidades = parseInt(cantidadUnidades);
        while (cantidadUnidades == " " || cantidadUnidades < 1 || cantidadUnidades > 1000) {
            cantidadUnidades = prompt("ERROR. Reingrese el cantidad Unidades menor a 1000: ").toUpperCase();
            cantidadUnidades = parseInt(cantidadUnidades);
        }

        tipoInflamable = prompt("Ingrese el tipo de inflamable (ignífugo, combustible, explosivo): ").toLowerCase();
        while (tipoInflamable == " " || tipoInflamable != "ignífugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo")
        {
            tipoInflamable = prompt("ERROR. Reingrese el tipo de inflamable (ignífugo, combustible, explosivo): ").toLowerCase();
        }

        marca = prompt("Ingrese la marca del producto:");
        contadorTotalProductos++;
        switch (tipoProducto) {
            case "ALCOHOL":
                acumuladorAlcoholes = acumuladorAlcoholes + cantidadUnidades;
                contadorIngresosAlcoholes++;
                break;
            case "IAC":
                acumuladorIac = acumuladorIac + cantidadUnidades;
                contadorIngresosIac++;
                if (precio < 201)
                {
                    acumuladorCantidadIACmenorA200 = acumuladorCantidadIACmenorA200 + cantidadUnidades;
                    }
                break;
            case "QUAT":
                acumuladorQuat = acumuladorQuat + cantidadUnidades;
                contadorIngresosQuat++;
                break;
        }

        switch (tipoInflamable) {
            case "combustible":
                acumuladorCombustibles = acumuladorCombustibles + cantidadUnidades;
                break;
            case "explosivo":
                acumuladorExplosivos = acumuladorExplosivos + cantidadUnidades;
                break;
            case "ignífugo":
                acumuladorIgnifugos = acumuladorIgnifugos + cantidadUnidades;
                break;
        }
        if (precioDelMasCaro < precio || contadorTotalProductos == 1)
        {
            tipoDelMasCaro = tipoProducto;
            marcaDelMasCaro = marca;
            }
        variableControl++;
    }//fin while ingresos
    promedioCantidadAlcholes = acumuladorAlcoholes / contadorIngresosAlcoholes;
    promedioCantidadIac = acumuladorIac / contadorIngresosIac;
    promedioCantidadQuart = acumuladorQuat / contadorIngresosQuat;
// a) El promedio de cantidad por tipo de producto
    document.write("El promedio de cantidad por tipo Alcoholes: " + promedioCantidadAlcholes + "<br>");
    document.write("El promedio de cantidad por tipo IAC: " + promedioCantidadIac  + "<br>");
    document.write("El promedio de cantidad por tipo QUART: " + promedioCantidadQuart + "<br>");
// b) El tipo de inflamable con más cantidad de unidades en total de la compra
    if (acumuladorCombustibles > acumuladorExplosivos && acumuladorCombustibles > acumuladorIgnifugos)
    {
        document.write("El tipo de inflamable con más cantidad de unidades en total de la compra es: Combustible"+ "<br>");
    } else {
        if (acumuladorExplosivos > acumuladorIgnifugos)
        {
            document.write("El tipo de inflamable con más cantidad de unidades en total de la compra es: Explosivos"+ "<br>");
        } else {
            document.write("El tipo de inflamable con más cantidad de unidades en total de la compra es: Ignifugos"+ "<br>");
        }
            }
// c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
    document.write(" unidades de IAC con precios menos a 200 (inclusive) se compraron en total "+ acumuladorCantidadIACmenorA200 + "<br>");
// d) la marca y tipo del más caro de los productos
document.write(" El tipo del más caro de los productos es: " + tipoDelMasCaro + "y la marca: " + marcaDelMasCaro + "<br>");
} //fin funcion
