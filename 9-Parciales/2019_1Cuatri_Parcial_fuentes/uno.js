// Realizar el algoritmo que pida los datos necesarios para un 
// triángulo equilátero por prompt y que muestre el perímetro por alert.

function mostrar()
{
    var lados;
    var perimetro;

    lados = prompt("Ingrese la medida de un lado del triangulo equilatero: ");
    lados = parseInt (lados);

    perimetro = lados * 3;

    alert("El perimetro del triángulo equilátero es: " + perimetro);
}
