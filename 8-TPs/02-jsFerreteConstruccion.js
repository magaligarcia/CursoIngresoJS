/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var total;

    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    perimetro = (largo + ancho) *2;
    
    total = perimetro *3;

    alert('Total de alambre necesario para un terreno rectangular: ' + total + ' mts');
}

function Circulo () 
{
    var radio;
    var diametro;
    var circunferencia;
    var total;
    

    radio = document.getElementById('txtIdRadio').value;
    radio = parseFloat(radio);
    diametro= radio *2;
    circunferencia= diametro * Math.PI;
    total= circunferencia *3;

    alert('Total de alambre necesario para un terreno circular es : ' + total + ' mts');
}

function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var cemento;
    var cal;
    
    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    area = largo * ancho;
    cemento = area * 2;
    cal = area * 3;

    alert('Necesita ' + cemento + ' bolsas de cemento y ' + cal + ' de cal.');
}
