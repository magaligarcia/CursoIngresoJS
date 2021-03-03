/* Enunciado:2

Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota */

function mostrar() {
    var tipoCursada;
    var cantidadMaterias;
    var sexo;
    var notaPromedio;
    var edad;
    var variableControl;


    variableControl = "si";
    while (variableControl == "si") {
        tipoCursada = prompt("Ingrese tipo de curasada ( libre ; presencial ; remota )").toLowerCase();
        while (tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota" || tipoCursada == " " ) {
            tipoCursada = prompt("ERROR. Ingrese ( libre ; presencial ; remota )").toLowerCase();
        }













        variableControl = prompt("Desea ingresar otro alumno? SI / NO: ").toLowerCase();
        while (variableControl != "si" || variableControl != "no") {
            variableControl = prompt("ERROR. responda SI / NO: ").toLowerCase();
        }
    }// fin while ingresos
























}//fin funcion