// Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
// a) El promedio de las notas totales.
// b) La nota más baja y el sexo de esa persona.
// c) La cantidad de varones que su nota haya sido mayor o igual a 6.

function mostrar()
{
    var nota;
    var sexo;
    var contadorAlumnos;
    var acumuladorNotas;
    var promedio;
    var notaMasBaja;
    var sexoNotaBaja;
    var contadorNotaVaronesMayor6;

    
    sexo = prompt('Ingrese el sexo. "F o M"').toLowerCase();
    nota = prompt('Ingrese la nota entre 0 y 10');
    nota = parseInt(nota);

    contadorAlumnos = 0;
    contadorNotaVaronesMayor6 = 0;

    while (contadorAlumnos < 5)
    {
        while(sexo != 'f' && sexo != 'm')
        {
            sexo = prompt('ERROR! Debe ingresar "F o M"').toLowerCase();
        }

        while(nota < 0 || nota > 10)
        {
            nota = prompt('ERROR! La nota debe ser entre 0 y 10');
            nota = parseInt(nota);
        }

        if(nota > 5 && sexo == 'm')
        {
            contadorNotaVaronesMayor6++;
        }
       
    contadorAlumnos++;
    }
    
    promedio = acumuladorNotas / 5;
   
}//FIN DE LA FUNCION
