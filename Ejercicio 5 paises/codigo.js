/* 
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
    a)La cantidad de temperaturas pares.
    b)la cantidad de temperaturas impares de europa
    c)El nombre del pais con menos habitantes
    d)la cantidad de paises que superan los 40 grados.
    e)la cantidad de paises de america que tienen menos de 0 grados .
    f)el promedio de habitantes entre los paises ingresados .
    g)el promedio de habitantes entre los paises que superan los 40 grados        
    H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
    i) que continente tiene mas habitantes.*/

function mostrar() 
{
var continente;
var nombrePais;
var cantidadHabitantes;
var nivelPobresa;
var temperaturaMinima;
var variableControl;
var contadorTemperaturasPares;
var contadorTemperaturasImpares;
var nombrePaisConMenosHabitantes;
var cantidadPaisConMenosHabitantes;
var contadorPaisesIngresados;
var contadorPaisesSuperan40Grados;
var contadorPaisesAmericaMenosCeroGrados;
var acumuladorHabitantes;
var promedioHabitantesPaisesIngresados;
var acumuladorHabitantesPaisesQueSuperan40Grados;
var promedioHabitantesPaisesQueSuperan40Grados;
var contadorTemperaturasIngresadas;
var temperaturaMinimaTotal;
var nombrePaisTemperaturaMinimaRegistrada;
var acumuladorHabitantesAfrica;
var acumuladorHabitantesAmerica;
var acumuladorHabitantesAsia;
var acumuladorHabitantesEuropa;
var acumuladorHabitantesOceania;

contadorTemperaturasPares = 0;
contadorTemperaturasImpares = 0;
contadorPaisesIngresados = 0;
contadorPaisesSuperan40Grados = 0;
contadorPaisesAmericaMenosCeroGrados =0;
contadorTemperaturasIngresadas =0;

acumuladorHabitantes = 0;
acumuladorHabitantesPaisesQueSuperan40Grados = 0;
acumuladorHabitantesAfrica =0;
acumuladorHabitantesAmerica =0;
acumuladorHabitantesAsia =0;
acumuladorHabitantesEuropa =0;
acumuladorHabitantesOceania =0;

variableControl = 0;

while (variableControl < 5) {
    continente = prompt("Ingrese el continente (america , asia , europa ,africa y oceania): ").toLowerCase();
    while (continente == " " || continente != "america" && continente != "asia" && continente != "europa" && continente != "africa"&& continente != "oceania") 
    {
        continente = prompt("ERROR! Reingrese el continente (america , asia , europa ,africa y oceania: ) ").toLowerCase();
    }
    nombrePais = prompt("Ingrese el nombre del pais:");
    contadorPaisesIngresados++;
    cantidadHabitantes = prompt("Ingrese la cantidad de habitantes en millones entre 1 y 7000");
    cantidadHabitantes = parseInt(cantidadHabitantes);
    while (isNaN(cantidadHabitantes == true || cantidadHabitantes < 1 || cantidadHabitantes > 7000)) 
    {
        cantidadHabitantes = prompt("ERROR! Reingrese la cantidad de habitantes en millones entre 1 y 7000");
        cantidadHabitantes = parseInt(cantidadHabitantes);
    }
    cantidadHabitantes = cantidadHabitantes * 1000000;
    acumuladorHabitantes++;

    nivelPobresa = prompt("Ingrese el nivel de pobresa (pobre, rico , muy rico): ").toLowerCase();
    while (nivelPobresa == " " || continente == "europa" && nivelPobresa == "pobre" || nivelPobresa !="pobre" && nivelPobresa !="rico" && nivelPobresa !="muy rico")
    {
        nivelPobresa = prompt("ERROR! Reingrese el nivel de pobresa (pobre, rico , muy rico) Europa no tiene paises pobres: ").toLowerCase();
    }
    temperaturaMinima = prompt("Ingrese la temperatura mínima que se registra en este territorio (entre -50 y 50)");
    temperaturaMinima = parseInt(temperaturaMinima);
    while (isNaN(temperaturaMinima) == true || temperaturaMinima < -50 || temperaturaMinima > 50) {
        temperaturaMinima = prompt("Ingrese la temperatura mínima que se registra en este territorio (entre -50 y 50)");
        temperaturaMinima = parseInt(temperaturaMinima);
    }
    contadorTemperaturasIngresadas++;
    
    if(temperaturaMinima % 2 == 0)// a)La cantidad de temperaturas pares.
    {
        contadorTemperaturasPares++;
    } else {
        if(continente == "europa")// b)la cantidad de temperaturas impares de europa
        {
            contadorTemperaturasImpares++;
        }   
    }

    if(cantidadPaisConMenosHabitantes < cantidadHabitantes || contadorPaisesIngresados == 1) //c)El nombre del pais con menos habitantes
    {
        nombrePaisConMenosHabitantes = nombrePais;
        cantidadPaisConMenosHabitantes = cantidadHabitantes;
    }

    switch (temperaturaMinima) { //d)la cantidad de paises que superan los 40 grados.  g)el promedio de habitantes entre los paises que superan los 40 grados
        case temperaturaMinima > 40 :
            contadorPaisesSuperan40Grados++;
            acumuladorHabitantesPaisesQueSuperan40Grados = acumuladorHabitantesPaisesQueSuperan40Grados + cantidadHabitantes;
            break;
    
        case temperaturaMinima < 0: //e)la cantidad de paises de america que tienen menos de 0 grados .
            if(continente == "america")
            {
                contadorPaisesAmericaMenosCeroGrados++;
            }
        break;

    }
    switch (continente) { //i) que continente tiene mas habitantes.*/
        case "africa":
            acumuladorHabitantesAfrica = acumuladorHabitantesAfrica + cantidadHabitantes;
        break;
        case "america":
            acumuladorHabitantesAmerica = acumuladorHabitantesAmerica + cantidadHabitantes;
        break;
        case "asia":
            acumuladorHabitantesAsia = acumuladorHabitantesAsia + cantidadHabitantes;
        break;
        case "europa":
            acumuladorHabitantesEuropa = acumuladorHabitantesEuropa + cantidadHabitantes;
        break;
        case "oceania":
            acumuladorHabitantesOceania = acumuladorHabitantesOceania + cantidadHabitantes;
        break;
    }

    if(temperaturaMinimaTotal < temperaturaMinima || contadorTemperaturasIngresadas == 1) //H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
    {
        temperaturaMinimaTotal = temperaturaMinima;
        nombrePaisTemperaturaMinimaRegistrada = nombrePais;
    }

variableControl++;
}// fin while ingresos

promedioHabitantesPaisesIngresados = acumuladorHabitantes / cantidadHabitantes; //f)el promedio de habitantes entre los paises ingresados .
promedioHabitantesPaisesQueSuperan40Grados = acumuladorHabitantesPaisesQueSuperan40Grados / contadorPaisesSuperan40Grados; //g)el promedio de habitantes entre los paises que superan los 40 grados
// a)La cantidad de temperaturas pares.
console.log("La cantidad de temperaturas pares es: " + contadorTemperaturasPares);
//     b)la cantidad de temperaturas impares de europa
console.log("La cantidad de temperaturas impares en europa es: " + contadorTemperaturasImpares);
//     c)El nombre del pais con menos habitantes
//     d)la cantidad de paises que superan los 40 grados.
//     e)la cantidad de paises de america que tienen menos de 0 grados .
//     f)el promedio de habitantes entre los paises ingresados .
//     g)el promedio de habitantes entre los paises que superan los 40 grados        
//     H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
//     i) que continente tiene mas habitantes.*/
if (acumuladorHabitantesAfrica > acumuladorHabitantesAmerica && acumuladorHabitantesAfrica > acumuladorHabitantesAsia && acumuladorHabitantesAfrica > acumuladorHabitantesEuropa && acumuladorHabitantesAfrica > acumuladorHabitantesOceania) 
{
    console.log("El continente con más habitantes es  Africa");
} else {
    if(acumuladorHabitantesAmerica > acumuladorHabitantesAsia && acumuladorHabitantesAmerica > acumuladorHabitantesEuropa && acumuladorHabitantesAmerica > acumuladorHabitantesOceania)
    {
        console.log("El continente con más habitantes es  America");
    } else {
        if(acumuladorHabitantesAsia > acumuladorHabitantesEuropa && acumuladorHabitantesAsia > acumuladorHabitantesOceania )
        {
            console.log("El continente con más habitantes es Asia");
        } else {
            if(acumuladorHabitantesEuropa > acumuladorHabitantesOceania)
            {
                console.log("El continente con más habitantes es Asia");
            } else {
                console.log("El continente con más habitantes es Oceania");
            }
        }
    }
}
} //FIN FUNCION