/*  GARCIA, MAGALI MARIBEL - TP 1
Enunciado:
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;
    
    precioUno=parseFloat(precioUno);
    precioDos=parseFloat(precioDos);
    precioTres=parseFloat(precioTres);

    suma = precioUno + precioDos + precioTres;

    alert('La suma total es de: $' + suma);

}

function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var promedio;

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;
    
    precioUno=parseFloat(precioUno);
    precioDos=parseFloat(precioDos);
    precioTres=parseFloat(precioTres);

    suma = precioUno + precioDos + precioTres;

    promedio= suma / 3;
    alert('El promedio es: ' + promedio);

	
}

function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var totalConIVA;

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;
    
    precioUno=parseFloat(precioUno);
    precioDos=parseFloat(precioDos);
    precioTres=parseFloat(precioTres);

    suma = precioUno + precioDos + precioTres;

    totalConIVA= suma * 1.21;
    
    alert('El precio final es: ' + totalConIVA.toFixed(2));
}