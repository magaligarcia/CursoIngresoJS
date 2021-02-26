/* MAGALI GARCIA
 Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

X) Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar. 
X) Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar. 
X)  a) El importe total a pagar , bruto sin descuento y... 
X)  b) el importe total a pagar con descuento(solo si corresponde)
X)  d) Informar el tipo con mas cantidad de bolsas.
X)  f) El tipo mas caro*/

function mostrar()
{
    var ingresarOtroProducto;
    var tipoProducto;
    var cantidadDeBolsas;
    var acumuladorTotalDeBolsas;
    var acumuladorAPagarBruto;
    var precioPorBolsa;
    var totalAPagarBruto;
    var totalAPagarConDescuento;
    var mayorCantidadDeBolsas;
    var tipoMayorCantidadDeBolsas;
    var tipoMasCaro;
    var precioDelMasCaro;


    acumuladorTotalDeBolsas = 0;
    acumuladorAPagarBruto = 0;
    precioDelMasCaro = 0;
    tipoMayorCantidadDeBolsas = 0;

    ingresarOtroProducto = "si";
    while (ingresarOtroProducto == "si") { //INGRESA DATOS HASTA QUE QUIERA
        tipoProducto = prompt("Ingrese el tipo del producto: ARENA, CAL O CEMENTO:").toLowerCase();
            while (tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento") {
                tipoProducto = prompt("ERROR!. El tipo del producto debe ser: ARENA, CAL O CEMENTO:").toLowerCase();
            }

        cantidadDeBolsas = prompt("Ingrese la cantidad de bolsas");
            while (isNaN(cantidadDeBolsas) == true) {
                cantidadDeBolsas = prompt("ERROR! Ingrese en números la cantidad de bolsas que desea: ");
            }
            cantidadDeBolsas = parseInt(cantidadDeBolsas);
            acumuladorTotalDeBolsas = acumuladorTotalDeBolsas + cantidadDeBolsas;

        precioPorBolsa = prompt("Ingrese el precio por bolsas");
            while (isNaN(precioPorBolsa) == true || precioPorBolsa < 0) {
                precioPorBolsa = prompt("ERROR! Ingrese en números el precio por bolsa: ");
            }
            precioPorBolsa = parseInt(precioPorBolsa);
            
        totalAPagarBruto = precioPorBolsa * cantidadDeBolsas; //TOTAL BRUTO POR PRODUCTO
        acumuladorAPagarBruto = acumuladorAPagarBruto + totalAPagarBruto; //TOTAL BRUTO POR COMPRA
         //tipo con mas cantidad de bolsas
        if(tipoMayorCantidadDeBolsas < cantidadDeBolsas){
            mayorCantidadDeBolsas = cantidadDeBolsas; 
            tipoMayorCantidadDeBolsas = tipoProducto;
        }
        //El tipo mas caro
        if(precioPorBolsa > precioDelMasCaro){
            precioDelMasCaro = precioPorBolsa;
            tipoMasCaro = tipoProducto;
        }
    //MODIFICO VARIABLE DE CONTROL
    ingresarOtroProducto = prompt("Desea comprar otro producto? Responda Si o No: ").toLowerCase();
    while (ingresarOtroProducto != "si" && ingresarOtroProducto != "no") {
        ingresarOtroProducto = prompt("ERROR! Responda Si o No: ").toLowerCase();
    }
    }//FIN WHILE INGRESO DE PRODUCTOS

    if(acumuladorTotalDeBolsas > 30){   // DESCUENTO SI SON MAS DE 30 BOLSAS
            totalAPagarConDescuento = totalAPagarBruto * 25 / 100;
            document.write("El importe con decuento es: "+totalAPagarConDescuento+"<br>");
    } else {
        if(acumuladorTotalDeBolsas > 10 && acumuladorTotalDeBolsas < 31){ // SI SON  MAS DE 10 PERO MENOS DE 30
        totalAPagarConDescuento = totalAPagarBruto * 15 / 100;
        document.write("El importe con decuento es: "+totalAPagarConDescuento+"<br>");
        }else{
            document.write("El importe total es: "+totalAPagarBruto+ "<br>"); // MENOS DE 10 BOLSAS
        }
    }
    document.write("El tipo con mas cantidad de bolsas es: "+tipoMayorCantidadDeBolsas+"<br>");
    document.write("El tipo más caro es: "+tipoMasCaro);
}// FIN DE LA FUNCION