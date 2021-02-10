/* GARCIA, MAGALI MARIBEL DIV H
TP 4.	
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var marca;
    var totalSinDescuento;
    var precioFinal;
    var impuestoIIBB;

    cantidadLamparas = document.getElementById('txtIdCantidad').value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = document.getElementById('Marca').value;
    totalSinDescuento = cantidadLamparas * 35;

     
    //A.Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    if (cantidadLamparas > 5)
    { 
        precioFinal = totalSinDescuento / 2;
    }

    //B.Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
    if(cantidadLamparas == 5)
    {
        if(marca == "ArgentinaLuz")
        {
            precioFinal = totalSinDescuento * 0.6;
        }
        else
        {
            precioFinal = totalSinDescuento * 0.7;  
        }
    } 

    //C.Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
    if(cantidadLamparas == 4)
    {
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            precioFinal = totalSinDescuento * 0.75;
        }
        else
        {
            precioFinal = totalSinDescuento * 0.8;
        }
    }

    //D.Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
    //si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
    if (cantidadLamparas == 3)
    {
        if (marca == "ArgentinaLuz")
        {
            precioFinal = totalSinDescuento * 0.85;
        }
        if (marca == "FelipeLamparas"){
            precioFinal = totalSinDescuento * 0.9;
        }
        else
        {
            precioFinal = totalSinDescuento * 0.95;
        }
    }

    //E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: Usted pago X de IIBB., siendo X el impuesto que se pagó. 
    if (precioFinal > 120){
        impuestoIIBB = precioFinal * 0.1;
        precioFinal = precioFinal + impuestoIIBB;
        alert ('Usted pago ' + impuestoIIBB + ' de IIBB.')
    }
    document.getElementById('txtIdprecioDescuento').value = precioFinal;

}
