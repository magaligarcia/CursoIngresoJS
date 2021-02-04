/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahrenheit;

    fahrenheit = document.getElementById('txtIdTemperatura').value;
    fahrenheit = parseFloat(fahrenheit);
    conversion = (fahrenheit - 32) / 1.8;

    alert( fahrenheit + '° fahrenheit son ' + conversion.toFixed(1) + '° centígrados');
    
}

function CentigradosFahrenheit () 
{
    var centigrados;
    
    centigrados = document.getElementById('txtIdTemperatura').value;
    centigrados = parseFloat(centigrados);
    conversion = (centigrados * 1.8) + 32;

    alert( centigrados + '° centígrados son ' + conversion.toFixed(1) + '° fahrenheit');
}
