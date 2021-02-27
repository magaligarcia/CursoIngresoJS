/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var eleccionUsuario;

function comenzar()
{
	eleccionMaquina = Math.floor(Math.random() * ((3+1) - 1) + 1); //Genero el número RANDOM entre 1 y 3


}//FIN DE LA FUNCIÓN
function piedra()
{
    eleccionUsuario = 1; //PIEDRA

    switch (eleccionMaquina) {
        case 1: // PIEDRA
        alert("Empate. La maquina tambien eligio PIEDRA");
        break;
        case 2: // PAPEL
        alert("Perdiste. La maquina eligio PAPEL");
        break;
        default: // TIJERA
        alert("Ganaste! La maquina eligio TIJERA");
            break;
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    eleccionUsuario = 2; // PAPEL
    switch (eleccionMaquina) {
        case 1: // PIEDRA
        alert("Ganaste! La maquina eligio PIEDRA");
        break;
        case 2: // PAPEL
        alert("Empate. La maquina tambien eligio PAPEL");
        break;
        default: // TIJERA
        alert("Perdiste. La maquina eligio TIJERA");
            break;
    }


}//FIN DE LA FUNCIÓN
function tijera()
{
	eleccionUsuario = 3; // TIJERA
    switch (eleccionMaquina) {
        case 1: // PIEDRA
        alert("Perdiste. La maquina eligio PIEDRA");
        break;
        case 2: // PAPEL
        alert("Ganaste! La maquina eligio PAPEL");
        break;
        default: // TIJERA
        alert("Empate. La maquina tambien eligio TIJERA");
            break;
    }

}//FIN DE LA FUNCIÓN