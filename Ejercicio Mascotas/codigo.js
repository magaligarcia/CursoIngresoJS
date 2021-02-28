/*
3- validación :
pedir el ingreso de 10 mascotas 
 validar 
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) y  si es de tipo "otros" o pájaro , pedir solo un texto
edad entre 1 y 20 para gatos y perros ,  para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza */

function probarEjercicio()
{
var tipo;
var raza;
var edad;
var nombre;
var ingresos;
var contadorTipoGato;
var contadorTipoPerro;
var contadorTipoPajaro;
var contadorTipoOtro;
var nombreGatoMasViejo;
var nombrePerroMasViejo;
var nombrePajaroMasViejo;
var nombreOtroMasViejo;
var mayorEdadDePerro;
var mayorEdadDeGato;
var mayorEdadDePajaro;
var mayorEdadDeOtros;
var contadorGenericos;
var contadorPeterbald;
var contadorSiameses;
var contadorTurcos;
var acumuladorEdadesGenericos;
var acumuladorEdadesPeterbald;
var acumuladorEdadesSiameses;
var acumuladorEdadesTurcos;
var promedioEdadGatoMasIngresado;

contadorTipoGato = 0;
contadorTipoPerro = 0;
contadorTipoPajaro = 0;
contadorTipoOtro = 0;
contadorGenericos = 0;
contadorPeterbald = 0;
contadorSiameses = 0;
contadorTurcos = 0;
acumuladorEdadesGenericos = 0;
acumuladorEdadesPeterbald = 0;
acumuladorEdadesSiameses = 0;
acumuladorEdadesTurcos = 0;

ingresos =0;

while(ingresos < 2){
tipo = prompt("Ingrese el tipo  de mascota. (gato , perro , pájaro y otros):").toLowerCase();
    while(tipo != "gato" && tipo != "perro" && tipo != "pájaro" &&  tipo != "otros")
    {
        tipo = prompt("ERROR! El tipo debe ser uno de los siguientes: gato , perro , pájaro u otros:").toLowerCase();
    }

switch(tipo){
    case "perro":
        raza = prompt("Ingrese la raza del perro: pastor, toy o callejero").toLowerCase();
        while(raza == " " || raza != "pastor" && raza != "toy" && raza !="callejero")
        {
            raza = prompt("ERROR! La raza debe ser: pastor, toy o callejero").toLowerCase();
        }
        contadorTipoPerro++;
        edad = prompt("Ingrese la edad del perro (entre 1 y 20):");
        edad = parseInt(edad);
        while(edad < 1 || edad > 20){
            edad = prompt("ERROR. La edad debe ser entre 1 y 20.");
            edad = parseInt(edad); 
        }
        if(edad > mayorEdadDePerro || contadorTipoPerro == 1)
        {
            nombrePerroMasViejo = nombre;
            mayorEdadDePerro = edad;
        }
    break;
    case "gato":
        raza = prompt("Ingrese la raza del gato: siamés, turco, peterbald , generico").toLowerCase();
        while(raza == " " || raza != "siamés" && raza != "turco" && raza !="peterbald" && raza !="generico")
        {
            raza = prompt("ERROR! La raza debe ser: siamés, turco, peterbald o generico").toLowerCase();
        }
        contadorTipoGato++;
        edad = prompt("Ingrese la edad del gato (entre 1 y 20):");
        edad = parseInt(edad);
        while(edad < 1 || edad > 20){
            edad = prompt("ERROR. La edad debe ser entre 1 y 20.");
            edad = parseInt(edad); 
        }
        switch (raza){
            case "peterbald":
                contadorPeterbald++;
                acumuladorEdadesPeterbald = acumuladorEdadesPeterbald + edad;
                break;
            case "generico":
                contadorGenericos++;
                acumuladorEdadesGenericos = acumuladorEdadesGenericos + edad;
            break;
            case "turco":
                contadorTurcos++;
                acumuladorEdadesTurcos = acumuladorEdadesTurcos + edad;
            break;
            case "siamés":
                contadorSiameses++;
                acumuladorEdadesSiameses = acumuladorEdadesTurcos + edad;
            break;
        }
        if(edad > mayorEdadDeGato || contadorTipoGato == 1 )
        {
            nombreGatoMasViejo = nombre;
            mayorEdadDeGato = edad;
        }
    break;
    case "pájaro":
        raza = prompt("Ingrese la raza del pajaro:");
        contadorTipoPajaro++;
        edad = prompt("Ingrese la edad del pajaro (entre 1 y 50):");
        edad = parseInt(edad);
        while(edad < 1 || edad > 50){
            edad = prompt("ERROR. La edad debe ser entre 1 y 50.");
            edad = parseInt(edad);
        }
        if(edad > mayorEdadDePajaro || contadorTipoPajaro == 1)
        {
            nombrePajaroMasViejo = nombre;
            mayorEdadDePajaro = edad;
        }
    break;   
    default:
        raza = prompt("Ingrese la raza del animal:");
        contadorTipoOtro++;
        edad = prompt("Ingrese la edad del animal (entre 1 y 100):");
        edad = parseInt(edad);
        while(edad < 1 || edad > 100)
        {
            edad = prompt("ERROR. La edad debe ser entre 1 y 100.");
            edad = parseInt(edad);
        }    
        if(edad > mayorEdadDeOtros || contadorTipoOtro == 1 )
            {
                nombreOtroMasViejo = nombre;
                mayorEdadDeOtros = edad;
            }
    break;
}
    nombre = prompt("Ingrese el nombre del animal:");
    while(isNaN(nombre) == false )
    {
        nombre = prompt("ERROR! El nombre no deben ser solo numeros. Reintentelo:");
    }
ingresos++;
}//FIN BUCLE 10 INGRESOS

 if(contadorPeterbald > contadorSiameses && contadorPeterbald > contadorGenericos && contadorPeterbald > contadorTurcos)
 {
    mayorCantidadRazaGatos = "Peterbald";
    promedioEdadGatoMasIngresado = acumuladorEdadesPeterbald / contadorPeterbald;
 } else {
     if(contadorSiameses > contadorGenericos && contadorSiameses > contadorTurcos)
     {
         mayorCantidadRazaGatos = "Siameses";
         promedioEdadGatoMasIngresado = acumuladorEdadesSiameses / contadorSiameses;
     } else {
         if(contadorTurcos > contadorGenericos){
             mayorCantidadRazaGatos = "Turcos";
             promedioEdadGatoMasIngresado = acumuladorEdadesTurcos / contadorTurcos;
         } else {
             mayorCantidadRazaGatos = "Generico";
             promedioEdadGatoMasIngresado = acumuladorEdadesGenericos / contadorGenericos;
         }
     }
 }

if(contadorTipoPerro == 0){
    document.write("No se ingreso ningun perro."+ "<br>");
} else {
    document.write("El perro más viejo es: "+nombrePerroMasViejo+ "<br>");
}
if(contadorTipoGato == 0){
    document.write("No se ingreso ningun gato."+ "<br>");
} else {
    document.write("El gato más viejo es: "+nombreGatoMasViejo+ "<br>");
}
if(contadorTipoPajaro == 0){
    document.write("No se ingreso ningun pajaro."+ "<br>");
} else {
    document.write("El pajaro más viejo es: "+nombrePajaroMasViejo+ "<br>");
}
if(contadorTipoOtro == 0){
    document.write("No se ingreso ninguna mascota de tipo 'otro'."+ "<br>");
} else {
    document.write("El animal de tipo 'otro' más viejo es: "+nombreOtroMasViejo+ "<br>");
}
document.write("La raza de gatos que más se ingresaron es: "+mayorCantidadRazaGatos+ " y su promedio de edades es: "+promedioEdadGatoMasIngresado);

}//FIN FUNCION