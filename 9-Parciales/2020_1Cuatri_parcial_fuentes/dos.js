/* MAGALI GARCIA
 Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

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

    acumuladorTotalDeBolsas = 0;
    acumuladorAPagarBruto = 0;

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
    
    //MODIFICO VARIABLE DE CONTROL
    ingresarOtroProducto = prompt("Desea comprar otro producto? Responda Si o No: ").toLowerCase();
    while (ingresarOtroProducto != "si" && ingresarOtroProducto != "no") {
        ingresarOtroProducto = prompt("ERROR! Responda Si o No: ").toLowerCase();
    }
    }//FIN WHILE INGRESO DE PRODUCTOS
    
    switch (acumuladorTotalDeBolsas) {
        case (acumuladorTotalDeBolsas > 10):
            totalAPagarConDescuento = totalAPagarBruto * 15 / 100;
            break;
        case (acumuladorTotalDeBolsas > 30):
            totalAPagarConDescuento = totalAPagarBruto * 25 / 100;
        default:
            break;
    }// FIN DE SWITCH DESCUENTOS

    document.write("El importe total es: "+totalAPagarBruto+ "<br>");
    document.write("El importe con decuento es: "+totalAPagarConDescuento+"<br>");
    document.write("El tipo con mas cantidad de bolsas es: "++"<br>");
    document.write("El tipo más caro es: ");


}// FIN DE LA FUNCION

/*  var tipo;//validad("arena";"cal";"cemento") 
  var cantidadDeBolsas;
  var precioPorBolsa;
  var respuesta;
  var acumuladorDeBolsas = 0;
  var precioBrutoTotal = 0;
  var precioBrutoProducto;
  var porcentaje;
  var descuento;
  var precioConDescuento;
  var acumuladorCal = 0;
  var acumuladorCemento = 0;
  var acumuladorArena = 0;
  var tipoConMasUnidades;
  var banderaDelPrimerProducto;
  var tipoMasCaro;
  var tipoMasCaroPrecio;


  banderaDelPrimerProducto="es el primero";
 
  respuesta="s";
  while(respuesta=="s")
  {

  	tipo=prompt("ingrese tipo");
  	while(tipo!="arena"&&tipo!="cal"&&tipo!="cemento")
  	{
  		tipo=prompt("error, ingrese tipo");
  	}
  	cantidadDeBolsas=prompt("ingrese cantidad de bolsas");
  	cantidadDeBolsas=parseInt(cantidadDeBolsas);
  	while(cantidadDeBolsas<1)
  	{
  		cantidadDeBolsas=prompt("error ,ingrese cantidad de bolsas");
  		cantidadDeBolsas=parseInt(cantidadDeBolsas);
  	}



  	precioPorBolsa=prompt("ingrese cantidad de bolsas");
  	precioPorBolsa=parseInt(precioPorBolsa);
  	while(precioPorBolsa<1)
  	{
  		precioPorBolsa=prompt("error ,ingrese cantidad de bolsas");
  		precioPorBolsa=parseInt(precioPorBolsa);
  	}

  	acumuladorDeBolsas=acumuladorDeBolsas+cantidadDeBolsas;
  	precioBrutoProducto=cantidadDeBolsas*precioPorBolsa;
  	precioBrutoTotal=precioBrutoTotal+precioBrutoProducto;

  	if(banderaDelPrimerProducto=="es el primero")
  	{
  		banderaDelPrimerProducto="ya paso";
  		tipoMasCaro=tipo;
  		tipoMasCaroPrecio=precioPorBolsa;
  	}else
  	{
  		if(precioPorBolsa>tipoMasCaroPrecio)
  		{
  			tipoMasCaro=tipo;
  			tipoMasCaroPrecio=precioPorBolsa;
  		}
  	}

  	switch(tipo)
  	{
  		case "arena":
  			acumuladorArena=acumuladorArena+cantidadDeBolsas;
  			break;
  		case "cal":
  			acumuladorCal=acumuladorCal+cantidadDeBolsas;
  			break;
  		case "cemento":
  			acumuladorCemento=acumuladorCemento+cantidadDeBolsas;
  			break;
    }
    
  	respuesta=prompt("seguir ?")
  }//termine

  if(acumuladorArena>acumuladorCemento&&acumuladorArena>acumuladorCal)
  {
  	//arena
  	tipoConMasUnidades="arena";
  }else
  {
  	if(acumuladorCal>acumuladorCemento)
  	{
  		tipoConMasUnidades="cal";
  	}else
  	{
  		tipoConMasUnidades="cemento";
  	}
  }

   if(acumuladorDeBolsas>30)
  {
  	porcentaje=25;

  }else
  {
  	if(acumuladorDeBolsas>10)
  	{
  		porcentaje=15;
  	}else
  	{
  		porcentaje=0;
  	}
  }

   if(porcentaje!=0)
  {
  	descuento=precioBrutoTotal*porcentaje/100;
  	precioConDescuento=precioBrutoTotal-descuento;
 	console.log("pagar con descuento: "+precioConDescuento);		
  }

 // El importe total a pagar , bruto sin descuento
 console.log("bruto sin descuento: "+precioBrutoTotal);
 console.log("el tipo mas comprado es: "+tipoConMasUnidades);
 console.log("el tipo mas caro  es: "+tipoMasCaro);
 */