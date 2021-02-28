// "super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
// tipo(limpieza , comestible , otros)solo estos tres tipos
// nombre del producto
// importe del producto (no mayor a 1000 pesos)
// procedencia(importado, nacional, elaborado)
// Peso (no mayor a 30 kilos)

// informar SOLO SI HAY 
//X     a) el NOMBRE del mas pesado de los comestibles //TIPO
// b) el NOMBRE del  mas caro de todos los productos //PRECIO
// c) el NOMBRE del  mas barato de los elaborados //PRECIO
//X     d)el tipo de mercadería  que mas aparece //CANTIDAD
// e)el porcentaje de productos elaborados por sobre el total //PROCEDENCIA
// f) el promedio de pesos por cada tipo ingresado // PESO Y TIPO

function probarEjercicio(){
    var tipo;
    var nombre;
    var importe;
    var procedencia;
    var peso;
    var continuar;
    var nombreMasPesadoComestibles;
    var pesoMasPesadoComestibles;
    var contadorComestibles;
    var contadorLimpieza;
    var contadorOtros;
    var acumuladorPesoComestibles;
    var acumuladorPesoLimpieza;
    var acumuladorPesoOtros;
    var tipoQueMasAparece;
    var contadorElaborados;
    var contadorImportados;
    var contadorNacionales;

    pesoMasPesadoComestibles = 0;
    contadorComestibles = 0;
    contadorLimpieza = 0;
    contadorOtros = 0;
    acumuladorPesoComestibles = 0;
    acumuladorPesoLimpieza = 0;
    acumuladorPesoOtros = 0;
    contadorElaborados = 0;
    contadorImportados = 0;
    contadorNacionales = 0;


    continuar = "si";
    while(continuar =="si")
    {
        tipo = prompt("Ingrese uno de estos tipos para el producto: limpieza , comestible, otros");
        while(tipo == " " || tipo != "limpieza" && tipo != "comestible" && tipo != "otros")
        {
            tipo = prompt("ERROR! El tipo debe ser uno de los siguientes: limpieza , comestible, otros");
        }

        nombre = prompt("Ingrese el nombre del producto:");
        while(nombre == " ")
        {
            nombre = prompt("ERROR! Debe agregar un nombre:");
        }

        importe = prompt("Ingrese el importe del producto (Menor a 1000):");
        importe = parseInt(importe);
        while(importe == " " || importe > 1000)
        {
            importe = prompt("ERROR! Debe agregar un importe menor a 1000:");
            importe = parseInt(importe);
        }



        procedencia = prompt("Ingrese la procedencia del producto (importado, nacional, elaborado):");
        while(procedencia == " " || procedencia !="importado" && procedencia !="nacional" && procedencia !="elaborado")
        {
            procedencia = prompt("ERROR! La procedencia del producto debe ser una de estas: importado, nacional, elaborado:");
        }

        switch (procedencia) {
            case "elaborado":
                contadorElaborados++;
                break;
            case "importado":
                contadorImportados++;
                break;
            case "nacional":
                contadorNacionales++;
                break;


    
        peso = prompt("Ingrese el peso del producto (Menor a 30Kg):");
        peso = parseInt(peso);
        while(peso == " " || peso > 30)
        {
            peso = prompt("ERROR! Debe agregar un peso menor a 30Kg:");
            peso = parseInt(peso);
        }
        
        switch (tipo) {
            case "comestible":
                contadorComestibles++;
                acumuladorPesoComestibles = acumuladorPesoComestibles + peso;
                if(peso > pesoMasPesadoComestibles) // a) el NOMBRE del mas pesado de los comestibles //TIPO
                {
                    pesoMasPesadoComestibles = peso;
                    nombreMasPesadoComestibles =  nombre;
                }
            break;
            case "limpieza":
                contadorLimpieza++;
                acumuladorPesoLimpieza = acumuladorPesoLimpieza + peso;
            break;
            case "otros":
                contadorOtros++;
                acumuladorPesoOtros = acumuladorPesoOtros + peso;
                break;
        }
        //d)el tipo de mercadería  que mas aparece 
        if(contadorComestibles > contadorLimpieza && contadorComestibles > contadorOtros)
        {
            tipoQueMasAparece = "Comestibles";
        }else {
            if(contadorLimpieza > contadorOtros)
            {
                tipoQueMasAparece = "Limpieza";
            } else {
                tipoQueMasAparece = "Otros";
            }
        }



    }// FIN WHILE

    

}