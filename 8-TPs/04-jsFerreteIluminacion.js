/*4.	Para el departamento de iluminación:
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
    var precioUnidad;
    var precioTotalConDescuento;
    var impuestoIIBB;

    cantidadLamparas = document.getElementById('txtIdCantidad').value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marca = document.getElementById('Marca').value;
    precioUnidad = 35;
    precioUnidad = parseFloat(precioUnidad);
     
    
    //A.Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    if (cantidadLamparas >= 6){ 
        precioTotalConDescuento = (cantidadLamparas * 35) / 2;
    }
    //B.Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
    if(cantidadLamparas == 5 && marca == "ArgentinaLuz"){ 
        precioTotalConDescuento = (cantidadLamparas * 35) * 0.4;
    } else if(cantidadLamparas == 5 && marca !== "ArgentinaLuz"){
        precioTotalConDescuento = (cantidadLamparas * 35) * 0.3;
    }
    //C.Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
    if(cantidadLamparas == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
        precioTotalConDescuento = (cantidadLamparas * 35) * 0.25;
    } else if (cantidadLamparas == 4 && marca !== "ArgentinaLuz" || marca !== "FelipeLamparas"){
        precioTotalConDescuento = (cantidadLamparas * 35) * 0.2;
    }
    //D.Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
    if (cantidadLamparas == 3 && marca == "ArgentinaLuz"){
        precioTotalConDescuento = (cantidadLamparas * 35) * 0.15;
    } else if (cantidadLamparas ==3 && marca == "FelipeLamparas"){
        precioTotalConDescuento = (cantidadLamparas * 35) * 0.10;
        } else if(cantidadLamparas == 3 && marca !== "ArgentinaLuz" && marca !=="FelipeLamparas"){
            precioTotalConDescuento = (cantidadLamparas * 35) * 0.05;
        }
    //E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: Usted pago X de IIBB., siendo X el impuesto que se pagó. 
    if (precioTotalConDescuento > 120){
        impuestoIIBB = precioTotalConDescuento * 0.1;
        precioTotalConDescuento = precioTotalConDescuento + impuestoIIBB;
        alert ('Usted pago ' + impuestoIIBB + ' de IIBB.')
    }



    document.getElementById('txtIdprecioDescuento').value = precioTotalConDescuento;

}
