/*
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
    a)El perro mas pesado
    b)El porcentaje de enfermos sobre el total de mascotas // contador acumulaor
    c)El nombre de la ultima mascota de tipo "otra cosa" 
    d)El animal sin pelo con menor temperatura corporal 
    e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
    f)Sumando gatos y perros que porcentaje del total de mascotas son?
    g)Que estado clinico tiene la menor cantidad de mascotas       
    H)Cual es el promedio de kilos de peso de tomando todas las mascotas // contador acumulaor
    i)El nombre y raza del gato sin pelos mas liviano*/
function mostrar() 
{
var tipo;
var tipoDePelaje;
var edad;
var nombre;
var raza;
var peso;
var estadoClinico;
var temperatura;
var variableDeControl;
var contadorTipoPerros;
var pesoPerroMasPesado;
var nombrePerroMasPesado;
var contadorMascotasTotales;
var contadorAnimalesEnfermos;
var contadorAnimalesAdopcion;
var contadorAnimalesInternados;
var porcentajeEnfermos;
var nombreUltimaMascotaTipoOtros;
var sinPelosConMenorTemperatura;
var contadorSinPelos;
var nombreSinPelosConMenorTemperatura;
var tipoSinPelosConMenorTemperatura;
var contadorTipoGatos;
var contadorTipoOtros;
var acumuladorTemperaturasPerros;
var acumuladorTemperaturasGatos;
var acumuladorTemperaturasOtros;
var promedioTemperaturasOtros;
var promedioTemperaturasGatos;
var promedioTemperaturasPerros;
var mascotaConMayorPromedioTemperatura;
var sumaGatosYPerros;
var porcentajeDeGatosYperros;
var estadoClinicoConMenorCantidad;
var acumuladorPesosTotales;
var promedioPesoTodasLasMascotas;
var PesoGatoSinPeloMasLiviano;
var nombreGatoSinPeloMasLiviano;
var razaGatoSinPeloMasLiviano;
var contadorGatosSinPelo;
var contadorDePerrosPesados;

contadorMascotasTotales = 0;
contadorTipoPerros = 0;
contadorTipoGatos = 0;
contadorTipoOtros = 0;
contadorSinPelos = 0;
contadorAnimalesEnfermos = 0;
contadorAnimalesAdopcion = 0;
contadorAnimalesInternados = 0;
contadorGatosSinPelo = 0;
contadorDePerrosPesados = 0;

acumuladorTemperaturasGatos = 0;
acumuladorTemperaturasOtros = 0;
acumuladorTemperaturasPerros = 0;
acumuladorPesosTotales = 0;

variableDeControl = "si";
while(variableDeControl == "si")
{
tipo = prompt("Ingrese el tipo de animal: Gato, Perro u Otra cosa").toLowerCase();
    while (isNaN(tipo)== false || tipo == " " || tipo !="gato" && tipo != "perro" && tipo!= "otra cosa") {
        tipo = prompt("ERROR! El tipo de animal debe ser: Gato, Perro u Otra cosa").toLowerCase();
    }
contadorMascotasTotales++;

tipoDePelaje = prompt("Ingrese el tipo de pelaje: corto, largo , sin pelo").toLowerCase();
    while (isNaN(tipoDePelaje)== false || tipoDePelaje == " " || tipoDePelaje !="corto" && tipoDePelaje != "largo" && tipoDePelaje!= "sin pelo") {
        tipoDePelaje = prompt("ERROR! El tipo de pelaje debe ser: corto, largo , sin pelo").toLowerCase();
    }

edad = prompt("Ingrese edad de la mascota: ");
edad = parseInt(edad);
    while (isNaN(edad)== true || edad == " " || edad < 1 || edad > 100) {
        edad = prompt("ERROR! La edad debe ser entre 1 y 100");
    }

nombre = prompt("Ingrese el nombre del animal:");
    while (isNaN(nombre)== false || nombre == " "  ) {  //falta validar quer sea una palabra
        nombre = prompt("ERROR! Reingrese el nombre del animal").toLowerCase();
    }

raza = prompt("Ingrese la raza del animal:");
while (isNaN(raza)== false || raza == " "  ) {  //falta validar quer sea una palabra
    raza = prompt("ERROR! Reingrese la raza del animal").toLowerCase();
}

peso = prompt("Ingrese el peso de la mascota: ");
peso = parseInt(peso);
    while (isNaN(peso)== true || peso == " " || peso < 1 || peso > 100) {
        peso = prompt("ERROR! La peso debe ser entre 1 y 100");
    }
acumuladorPesosTotales = acumuladorPesosTotales + peso;

estadoClinico = prompt("Ingrese el estado clinico del animal: enfermo, internado o adopcion").toLowerCase();
    while (isNaN(estadoClinico)== false || estadoClinico == " " || estadoClinico !="enfermo" && estadoClinico != "internado" && estadoClinico!= "adopcion") {
        estadoClinico = prompt("ERROR! Reongrese el estado clinico del animal: enfermo, internado o adopcion").toLowerCase();
    }

temperatura = prompt("Ingrese la temperatura de la mascota: ");
temperatura = parseInt(temperatura);
    while (isNaN(temperatura)== true || temperatura == " " || temperatura < 20 || temperatura > 40) {
        temperatura = prompt("ERROR! La temperatura debe ser entre 20 y 40");
    }

switch (tipo) { 
    case "perro": 
        contadorTipoPerros++;
        acumuladorTemperaturasPerros = acumuladorTemperaturasPerros + temperatura;
        promedioTemperaturasPerros = acumuladorTemperaturasPerros / contadorTipoPerros;
        if(pesoPerroMasPesado > peso || contadorTipoPerros == 1) //a)El perro mas pesado
        {
            contadorDePerrosPesados++;
            pesoPerroMasPesado = edad;
            nombrePerroMasPesado = nombre;
        }
    break;
    case "gato":
        contadorTipoGatos++;
        acumuladorTemperaturasGatos = acumuladorTemperaturasGatos + temperatura;
        promedioTemperaturasGatos = acumuladorTemperaturasGatos / contadorTipoGatos;
        if(tipoDePelaje == "sin pelo" && peso < PesoGatoSinPeloMasLiviano) //i)El nombre y raza del gato sin pelos mas liviano
        {
            nombreGatoSinPeloMasLiviano = nombre;
            razaGatoSinPeloMasLiviano = raza;
            PesoGatoSinPeloMasLiviano = peso;
            contadorGatosSinPelo++;
        }
    break;
    case "otra cosa":
        contadorTipoOtros++;
        acumuladorTemperaturasOtros = acumuladorTemperaturasOtros + temperatura;
        promedioTemperaturasOtros  = acumuladorTemperaturasOtros / contadorTipoOtros;
        nombreUltimaMascotaTipoOtros = nombre; //)El nombre de la ultima mascota de tipo "otra cosa"
    break;
} // FIN SWITCH TIPO

switch (estadoClinico) { //b)El porcentaje de enfermos sobre el total de mascotas //g)Que estado clinico tiene la menor cantidad de mascotas    
    case "enfermo":
        contadorAnimalesEnfermos++;
        break;
    case "adopcion": 
        contadorAnimalesAdopcion++;
        break;
    case "internado":
        contadorAnimalesInternados++;
        break;
}// FIN SWITCH ESTADO CLINICO

switch (tipoDePelaje) { 
    case "sin pelo":
        contadorSinPelos++;
        if(sinPelosConMenorTemperatura < temperatura || contadorSinPelos == 1) //d)El animal sin pelo con menor temperatura corporal 
        {
            sinPelosConMenorTemperatura = temperatura;
            nombreSinPelosConMenorTemperatura = nombre;
            tipoSinPelosConMenorTemperatura = tipo;
        }
        break;
}// FIN SWITCH TIPO PELAJE  
variableDeControl = prompt("Desea Ingresar otra mascota? SI / NO: ").toLowerCase();
    while (isNaN(variableDeControl)== false || variableDeControl == " " || variableDeControl !="si" && variableDeControl != "no") {
    variableDeControl = prompt("ERROR! responda SI o NO.").toLowerCase();
}
}//FIN WHILE INGRESO MASCOTAS
//e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal :
if(promedioTemperaturasGatos > promedioTemperaturasOtros && promedioTemperaturasGatos > promedioTemperaturasPerros)
{
mascotaConMayorPromedioTemperatura = "Gatos ";
} else {
    if(promedioTemperaturasPerros > promedioTemperaturasOtros)
    {
        mascotaConMayorPromedioTemperatura = "Perros ";
    } else {
        mascotaConMayorPromedioTemperatura = "Otros ";
    }
}
//g)Que estado clinico tiene la menor cantidad de mascotas       
if(contadorAnimalesInternados < contadorAnimalesAdopcion && contadorAnimalesInternados < contadorAnimalesEnfermos)
{
    estadoClinicoConMenorCantidad = "Internados";
} else {
    if(contadorAnimalesAdopcion < contadorAnimalesEnfermos)
    {
        estadoClinicoConMenorCantidad = "Adopción";
    } else {
        estadoClinicoConMenorCantidad = "Enfermos";
    }
}
sumaGatosYPerros = contadorTipoGatos + contadorTipoPerros; //f)Sumando gatos y perros que porcentaje del total de mascotas son?
porcentajeDeGatosYperros = contadorMascotasTotales / sumaGatosYPerros;
porcentajeEnfermos = contadorAnimalesEnfermos / contadorMascotasTotales; 
promedioPesoTodasLasMascotas = acumuladorPesosTotales / contadorMascotasTotales; // H)Cual es el promedio de kilos de peso de tomando todas las mascotas

//SALIDAS:
if(contadorDePerrosPesados != 0)//     a)El perro mas pesado
{
 document.write("El perro más pesado es:"+ nombrePerroMasPesado + "<br>");
} else {
    document.write("No se ingresaron perros para calcular el más pesado." + "<br>");
}
//     b)El porcentaje de enfermos sobre el total de mascotas 
if(porcentajeEnfermos != 0){
   document.write("El porcentaje de enfermos sobre el total de mascotas es: "+porcentajeEnfermos + "<br>"); 
} else {
    document.write("No se ingresaron mascotas enfermas para calcular el porcentaje total." + "<br>"); 
}
//     c)El nombre de la ultima mascota de tipo "otra cosa" 
if(contadorTipoOtros != 0){
    document.write("El nombre de la ultima mascota de tipo 'otra cosa': "+nombreUltimaMascotaTipoOtros + "<br>"); 
 } else {
     document.write("No se ingresaron mascotas de tipo 'otra cosa' para mostrar un nombre." + "<br>"); 
 }
//     d)El animal sin pelo con menor temperatura corporal 
if(contadorSinPelos != 0){
    document.write("El animal sin pelo con menor temperatura corporal': "+nombreUltimaMascotaTipoOtros + "<br>"); 
 } else {
     document.write("No se ingresaron mascotas sin pelo para mostrar la menor temperatura corporal" + "<br>"); 
 }
//     e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
document.write("Tipo de mascota que tiene el mayor promedio de temperatura corporal: "+mascotaConMayorPromedioTemperatura + "<br>"); 
//     f)Sumando gatos y perros que porcentaje del total de mascotas son?
if(contadorTipoPerros == 0 && contadorTipoGatos == 0){
    document.write("No se ingresaron gatos ni pérros para saber que porcentaje representan." + "<br>");
} else {
document.write("Sumando gatos y perros el porcentaje del total es: " + porcentajeDeGatosYperros+ "<br>");
}
//     g)Que estado clinico tiene la menor cantidad de mascotas    
document.write("Estado clinico que tiene la menor cantidad de mascotas: "+ estadoClinicoConMenorCantidad + "<br>");  
//     H)Cual es el promedio de kilos de peso de tomando todas las mascotas // contador acumulaor
document.write("Promedio de kilos de peso de tomando todas las mascotas: " + promedioPesoTodasLasMascotas+ "<br>");
//     i)El nombre y raza del gato sin pelos mas liviano*/
if(contadorGatosSinPelo == 0)
{
    document.write("No se ingresaron gatos sin pelos para mostrar el de peso mas liviano." + "<br>");
} else {
    document.write("El nombre del gato sin pelos mas liviano es: " +nombreGatoSinPeloMasLiviano+ " y la raza es: "+razaGatoSinPeloMasLiviano + "<br>");
}
}//FIN FUNCION