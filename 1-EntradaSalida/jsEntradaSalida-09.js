/*GARCIA, MAGALI MARIBEL

Ejercicio 9 - Entrada/Salida.
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
    var sueldo;
    var aumento;
    var resultado;

    sueldo = document.getElementById("txtIdSueldo").value;
    sueldo = parseInt(sueldo);

    aumento = sueldo * 10 / 100; // 10%
    resultado= sueldo + aumento;

    // resultado = sueldo * 1.10;

    document.getElementById("txtIdResultado").value = resultado;
}
