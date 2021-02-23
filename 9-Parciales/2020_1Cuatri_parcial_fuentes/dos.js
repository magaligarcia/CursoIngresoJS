// function mostrar()
// {
//   var tipo;//validad("arena";"cal";"cemento") 
//   var cantidadDeBolsas;
//   var precioPorBolsa;
//   var respuesta;
//   var acumuladorDeBolsas = 0;
//   var precioBrutoTotal = 0;
//   var precioBrutoProducto;
//   var porcentaje;
//   var descuento;
//   var precioConDescuento;
//   var acumuladorCal = 0;
//   var acumuladorCemento = 0;
//   var acumuladorArena = 0;
//   var tipoConMasUnidades;
//   var banderaDelPrimerProducto;
//   var tipoMasCaro;
//   var tipoMasCaroPrecio;


//   banderaDelPrimerProducto="es el primero";
 
//   respuesta="s";
//   while(respuesta=="s")
//   {

//   	tipo=prompt("ingrese tipo");
//   	while(tipo!="arena"&&tipo!="cal"&&tipo!="cemento")
//   	{
//   		tipo=prompt("error, ingrese tipo");
//   	}
//   	cantidadDeBolsas=prompt("ingrese cantidad de bolsas");
//   	cantidadDeBolsas=parseInt(cantidadDeBolsas);
//   	while(cantidadDeBolsas<1)
//   	{
//   		cantidadDeBolsas=prompt("error ,ingrese cantidad de bolsas");
//   		cantidadDeBolsas=parseInt(cantidadDeBolsas);
//   	}



//   	precioPorBolsa=prompt("ingrese cantidad de bolsas");
//   	precioPorBolsa=parseInt(precioPorBolsa);
//   	while(precioPorBolsa<1)
//   	{
//   		precioPorBolsa=prompt("error ,ingrese cantidad de bolsas");
//   		precioPorBolsa=parseInt(precioPorBolsa);
//   	}

//   	acumuladorDeBolsas=acumuladorDeBolsas+cantidadDeBolsas;
//   	precioBrutoProducto=cantidadDeBolsas*precioPorBolsa;
//   	precioBrutoTotal=precioBrutoTotal+precioBrutoProducto;

//   	if(banderaDelPrimerProducto=="es el primero")
//   	{
//   		banderaDelPrimerProducto="ya paso";
//   		tipoMasCaro=tipo;
//   		tipoMasCaroPrecio=precioPorBolsa;
//   	}else
//   	{
//   		if(precioPorBolsa>tipoMasCaroPrecio)
//   		{
//   			tipoMasCaro=tipo;
//   			tipoMasCaroPrecio=precioPorBolsa;
//   		}
//   	}

//   	switch(tipo)
//   	{
//   		case "arena":
//   			acumuladorArena=acumuladorArena+cantidadDeBolsas;
//   			break;
//   		case "cal":
//   			acumuladorCal=acumuladorCal+cantidadDeBolsas;
//   			break;
//   		case "cemento":
//   			acumuladorCemento=acumuladorCemento+cantidadDeBolsas;
//   			break;
//     }
    
//   	respuesta=prompt("seguir ?")
//   }//termine

//   if(acumuladorArena>acumuladorCemento&&acumuladorArena>acumuladorCal)
//   {
//   	//arena
//   	tipoConMasUnidades="arena";
//   }else
//   {
//   	if(acumuladorCal>acumuladorCemento)
//   	{
//   		tipoConMasUnidades="cal";
//   	}else
//   	{
//   		tipoConMasUnidades="cemento";
//   	}
//   }

//    if(acumuladorDeBolsas>30)
//   {
//   	porcentaje=25;

//   }else
//   {
//   	if(acumuladorDeBolsas>10)
//   	{
//   		porcentaje=15;
//   	}else
//   	{
//   		porcentaje=0;
//   	}
//   }

//    if(porcentaje!=0)
//   {
//   	descuento=precioBrutoTotal*porcentaje/100;
//   	precioConDescuento=precioBrutoTotal-descuento;
//  	console.log("pagar con descuento: "+precioConDescuento);		
//   }

//  // El importe total a pagar , bruto sin descuento
//  console.log("bruto sin descuento: "+precioBrutoTotal);
//  console.log("el tipo mas comprado es: "+tipoConMasUnidades);
//  console.log("el tipo mas caro  es: "+tipoMasCaro);


// }