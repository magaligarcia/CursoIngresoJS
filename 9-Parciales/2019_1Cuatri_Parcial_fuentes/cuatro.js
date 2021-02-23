// Pedir dos números y mostrar el resultado:
// Si son iguales los muestro concatenados.
// Si el primero es mayor, los resto,
// de lo contrario los sumo.
// Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
// "la resta es xxx y superó el 10".
function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = prompt('Ingrese el primer número');
    numeroDos = prompt('Ingrese el segundo número');

    numeroUno = parseInt (numeroUno);
    numeroDos = parseInt (numeroDos);

    if (numeroUno == numeroDos)
    {
        alert('Los números son iguales. Concatenación: ' + numeroUno + numeroDos);
    } else
    {
        if (numeroUno > numeroDos)
        {
            resultado = numeroUno - numeroDos;
            alert('El primer número es mayor al segudo. La resta da: ' + resultado);
        } else
        {
            if (numeroUno < numeroDos)
            {
                resultado = numeroUno + numeroDos;
                if(resultado > 10)
                {
                    alert("la suma es "+ resultado +" y supero el 10");
                }else 
                {
                    alert('El primer número es menor al segundo. La suma es: ' + resultado);
                }
            }
        }
    }


}
