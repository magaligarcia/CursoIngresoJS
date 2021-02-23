// A una pareja se le pide los datos para mostrar un mensaje " 
// ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".

function mostrar()
{
    var nombreUno;
    var nombreDos;
    var pesoUno;
    var pesoDos;
    var suma;
    var promedio;

    nombreUno = prompt("Ingresa tu nombre: ");
    pesoUno = prompt("Hola "+nombreUno+"! Ahora ingresa tu peso: ");
    pesoUno = parseInt(pesoUno);

    nombreDos = prompt("Ingresa el nombre de tu pareja: ");
    pesoDos = prompt("Ahora ingresa el peso de "+nombreDos);
    pesoDos = parseInt(pesoDos);
    suma = pesoUno + pesoDos;
    promedio = suma / 2;

    alert("Ustedes se llaman "+nombreUno+" y " +nombreDos+ " pesan " +pesoUno+ " y " +pesoDos+ " kilos, que sumados son " +suma+ " kilos y el promedio de peso es de: "+promedio);

  
}
