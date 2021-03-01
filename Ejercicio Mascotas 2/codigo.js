/*3- validación :
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
var controlBucle;
var contadorPerros;
var contadorGatos;
var contadorPajaros;
var contadorOtros;
var edadMasViejoTipoPerros;
var edadMasViejoTipoGatos;
var edadMasViejoTipoPajaros;
var edadMasViejoTipoOtros;
var nombreMasViejoTipoGatos;
var nombreMasViejoTipoPerros;
var nombreMasViejoTipoPajaros;
var nombreMasViejoTipoOtros;
var contadorSiameses;
var contadorTurcos;
var contadorPeterbald;
var contadorGenericos;
var razaDeGatosConMasAnimales;
var promedio;
var acumuladorEdadesPeterbald ;
var acumuladorEdadesSiameses;
var acumuladorEdadesTurcos;
var acumuladorEdadesGenericos;

contadorGatos = 0;
contadorPerros = 0;
contadorPajaros = 0;
contadorOtros = 0;
contadorGenericos = 0;
contadorSiameses = 0;
contadorTurcos = 0;
contadorPeterbald = 0;
acumuladorEdadesGenericos = 0;
acumuladorEdadesTurcos = 0;
acumuladorEdadesSiameses = 0;
acumuladorEdadesPeterbald = 0;

controlBucle = 0;

while (controlBucle < 2) {
    tipo = prompt("Ingrese el tipo de animal (gato , perro , pajaro u otros): ").toLowerCase()
        while (tipo == " " || tipo != "gato" && tipo != "perro" && tipo != "pajaro" && tipo != "otros" ) {
            tipo = prompt("ERROR! Debe ser gato , perro , pajaro u otros: ").toLowerCase();
        }
    nombre = prompt("Ingrese el nombre: ");
    while (tipo == " ")
        {
        nombre = prompt("ERROR! Nombre invalido, vuelva a intentarlo: ");
        }
    switch (tipo) {
        case "perro":
            contadorPerros++;
            raza = prompt("Ingrese la raza del perro (pastor, toy, callejero):").toLowerCase();
            while (raza == " " || raza != "pastor" && raza != "toy" && raza != "callejero") {
                raza = prompt("ERROR! Debe ser pastor, toy u callejero: ").toLowerCase();
            }
            edad = prompt("Ingrese la edad del perro:");
            edad = parseInt(edad);
            while (edad == " " || edad < 1 || edad > 20 ) {
                edad = prompt("ERROR! La edad debe ser entre 1 y 20.");
                edad = parseInt(edad);
            }
            if(edad > edadMasViejoTipoPerros || contadorPerros == 1)
            {
                edadMasViejoTipoPerros = edad;
                nombreMasViejoTipoPerros = nombre;
            }

        break;
        case "gato":
            contadorGatos++;
            raza = prompt("Ingrese la raza del gato (siames, turco, peterbald u generico):").toLowerCase();
            while (raza == " " || raza != "siames" && raza != "turco" && raza != "peterbald" && raza != "generico") {
                raza = prompt("ERROR! Debe ser siames, turco, peterbald u generico: ").toLowerCase();
            }
            edad = prompt("Ingrese la edad del gato: ");
            edad = parseInt(edad);
            while (edad == " " || edad < 1 || edad > 20 ) {
                edad = prompt("ERROR! La edad debe ser entre 1 y 20.");
                edad = parseInt(edad);
            }
            if(edad > edadMasViejoTipoGatos || contadorGatos == 1)
            {
                edadMasViejoTipoGatos = edad;
                nombreMasViejoTipoGatos = nombre;
            }
            switch(raza)
            {
                case "generico":
                    contadorGenericos++;
                    acumuladorEdadesGenericos = acumuladorEdadesGenericos + edad;
                    break;
                case "peterbald":
                    contadorPeterbald++;
                    acumuladorEdadesPeterbald = acumuladorEdadesPeterbald + edad;
                    break;
                case "siames":
                    contadorSiameses++;
                    acumuladorEdadesSiameses = acumuladorEdadesSiameses + edad;
                    break;
                case "turco":
                    contadorTurcos++;
                    acumuladorEdadesTurcos = acumuladorEdadesTurcos + edad;
                    break;
            }
        break;
        case "pajaro":
            contadorPajaros++;
            raza = prompt("Ingrese la raza del pájaro:");
            edad = prompt("Ingrese la edad del pájaro");
            edad = parseInt(edad);
            while (edad == " " || edad < 1 || edad > 50 ) {
                edad = prompt("ERROR! La edad debe ser entre 1 y 50.");
                edad = parseInt(edad);
            }
            if(edad > edadMasViejoTipoPajaros || contadorPajaros == 1)
            {
                edadMasViejoTipoPajaros = edad;
                nombreMasViejoTipoPajaros = nombre;
            }
            break;
        case "otros":
            contadorOtros++;
            raza = prompt("Ingrese la raza del animal:");
            edad = prompt("Ingrese la edad del animal");
            edad = parseInt(edad);
            while (edad == " " || edad < 1 || edad > 100 ) {
                edad = prompt("ERROR! La edad debe ser entre 1 y 100.");
                edad = parseInt(edad);
            }
            if(edad > edadMasViejoTipoOtros || contadorOtros == 1)
            {
                edadMasViejoTipoOtros = edad;
                nombreMasViejoTipoOtros = nombre;
            }
        break;
    }
controlBucle++;
}// FIN BUCLE CONTROL
// COMPARADOR TIPO MAS VIEJO
if(edadMasViejoTipoPerros > edadMasViejoTipoGatos && edadMasViejoTipoPerros > edadMasViejoTipoPajaros && edadMasViejoTipoPerros > edadMasViejoTipoOtros)
{
    nombreDelMasViejo = nombreMasViejoTipoPerros;
} else {
    if(edadMasViejoTipoGatos > edadMasViejoTipoOtros && edadMasViejoTipoGatos > edadMasViejoTipoPajaros )
{
    nombreDelMasViejo = nombreMasViejoTipoGatos;
}else {
    if(edadMasViejoTipoOtros  > edadMasViejoTipoPajaros )
{
    nombreDelMasViejo = nombreMasViejoTipoOtros;
}else{
    nombreDelMasViejo = nombreMasViejoTipoPajaros;
}
}
}//FIN IF
// raza de gatos que tiene mas animales y el promedio de edad de esta raza
    if (contadorSiameses > contadorGenericos && contadorSiameses > contadorTurcos && contadorSiameses > contadorPeterbald)
    {
        razaDeGatosConMasAnimales = "Siamés";
        promedio = acumuladorEdadesSiameses / contadorSiameses;
    } else {
        if(contadorGenericos > contadorPeterbald && contadorGenericos > contadorTurcos)
        {
            razaDeGatosConMasAnimales = "Generico";
            promedio = acumuladorEdadesGenericos / contadorGenericos;
        } else {
            if(contadorTurcos > contadorPeterbald){
                razaDeGatosConMasAnimales = "Turco";
                promedio = acumuladorEdadesTurcos / contadorTurcos;
            }else {
                razaDeGatosConMasAnimales = "Peterbald";
                promedio = acumuladorEdadesPeterbald / contadorPeterbald;
            }
        }
    }
// mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
if(contadorPerros != 0)
{
    document.write("El Perro más viejo es: " + nombreMasViejoTipoPerros + " <br>");   
} else {
    document.write("No se ingreso ningún perro." + "<br>")
}
if(contadorGatos != 0)
{
    document.write("El Gato más viejo es: " + nombreMasViejoTipoGatos + " <br>");
} else {
    document.write("No se ingreso ningún gato." + "<br>")
}
if(contadorPajaros != 0)
{
    document.write("El Pajaro más viejo es: " + nombreMasViejoTipoPajaros + " <br>");
} else {
    document.write("No se ingreso ningún pajaro." + "<br>")
}
if(contadorOtros != 0)
{
    document.write("El animal de tipo otro más viejo es: " + nombreMasViejoTipoOtros + " <br>");
} else {
    document.write("No se ingreso ningún animal de tipo otro." + "<br>")
}
// mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza
document.write("La raza de gatos más ingresada es: " + razaDeGatosConMasAnimales + "<br>")
document.write("El promedio de edad la raza más ingresada es: " + promedio + "<br>")
}//FIN FUNCION