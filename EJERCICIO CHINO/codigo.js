// "super chino" Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
// tipo(limpieza , comestible , otros)solo estos tres tipos
// nombre del producto
// importe del producto (no mayor a 1000 pesos)
// procedencia(importado, nacional, elaborado)
// Peso (no mayor a 30 kilos)

// informar SOLO SI HAY 
//X     a) el NOMBRE del mas pesado de los comestibles //TIPO
//X     b) el NOMBRE del  mas caro de todos los productos //PRECIO
//X     c) el NOMBRE del  mas barato de los elaborados //PRECIO
//X     d)el tipo de mercadería  que mas aparece //CANTIDAD
//X     e)el porcentaje de productos elaborados por sobre el total //PROCEDENCIA
//x     f) el promedio de pesos por cada tipo ingresado // PESO Y TIPO

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
    var nombreDelMasCaro;
    var precioDelMasCaro;
    var nombreDelMasBarato;
    var precioDelMasBarato;
    var contadorProductosTotales;
    var promedioPesoTipoLimpieza;
    var promedioPesoTipoComestible;
    var promedioPesoTipoOtro;
    var porcentajeProductosElaboradosSobreElTotal;

    contadorComestibles = 0;
    contadorLimpieza = 0;
    contadorOtros = 0;
    acumuladorPesoComestibles = 0;
    acumuladorPesoLimpieza = 0;
    acumuladorPesoOtros = 0;
    contadorElaborados = 0;
    contadorImportados = 0;
    contadorNacionales = 0;
    contadorProductosTotales = 0;

    continuar = "si";
    while(continuar =="si")
    {
        tipo = prompt("Ingrese uno de estos tipos para el producto: limpieza , comestible, otros");
        while(tipo == " " || tipo != "limpieza" && tipo != "comestible" && tipo != "otros")
        {
            tipo = prompt("ERROR! El tipo debe ser uno de los siguientes: limpieza , comestible, otros");
        }
        contadorProductosTotales++;

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
// b) el NOMBRE del  mas caro de todos los productos 
        if(importe > precioDelMasCaro || contadorProductosTotales == 1)
        {
            nombreDelMasCaro = nombre;
            precioDelMasCaro = importe;
        }

        procedencia = prompt("Ingrese la procedencia del producto (importado, nacional, elaborado):");
        while(procedencia == " " || procedencia !="importado" && procedencia !="nacional" && procedencia !="elaborado")
        {
            procedencia = prompt("ERROR! La procedencia del producto debe ser una de estas: importado, nacional, elaborado:");
        }

        switch (procedencia) {
            case "elaborado":
                contadorElaborados++;
//c) el NOMBRE del  mas barato de los elaborados
                if(importe < precioDelMasBarato || contadorElaborados == 1)
                {
                    nombreDelMasBarato = nombre;
                    precioDelMasBarato = importe;
                }
                break;
            case "importado":
                contadorImportados++;
                break;
            case "nacional":
                contadorNacionales++;
                break;
        }
    
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
// a) el NOMBRE del mas pesado de los comestibles
                if(peso > pesoMasPesadoComestibles || contadorComestibles == 1) 
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

    continuar = prompt("Desea seguir ingresando productos? SI / NO").toLowerCase();
    while(continuar != "si" && continuar != "no")
    {
        continuar = prompt("ERROR! Responda SI / NO").toLowerCase();
    }
    }// FIN WHILE
    
// b) el NOMBRE del  mas caro de todos los productos
    document.write("El nombre del más caro de todos los productos: "+ nombreDelMasCaro+ "<br>");

// f) el promedio de pesos por cada tipo ingresado // PESO Y TIPO
    if(contadorLimpieza == 0)
    {
        document.write("No hubo productos de limpieza para promediar su peso."+ "<br>");
    }else {
        promedioPesoTipoLimpieza = acumuladorPesoLimpieza / contadorLimpieza;
        document.write("Promedio de pesos de productos tipo LIMPIEZA:  " + promedioPesoTipoLimpieza + "<br>");
    }
    if(contadorOtros == 0)
    {
        document.write("No hubo productos de tipo otros para promediar su peso."+ "<br>");
    }else {
        promedioPesoTipoOtro = acumuladorPesoOtros / contadorOtros;
        document.write("Promedio de pesos de productos de tipo OTROS: "+ promedioPesoTipoOtro+ "<br>");
    }  
    if(contadorComestibles == 0)
    {
        document.write("No hubo productos comestibles para promediar su peso."+ "<br>" + "No hay producto comestible más pesado."+ "<br>");
    }else {
        promedioPesoTipoComestible = acumuladorPesoComestibles / contadorComestibles;
        document.write("Promedio de pesos de productos tipo COMESTIBLES: " +promedioPesoTipoComestible + "<br>");
//  a) el NOMBRE del mas pesado de los comestibles //TIPO
        document.write("El nombre del comestible más pesado es:" + nombreMasPesadoComestibles + "<br>");
    }
//e)el porcentaje de productos elaborados por sobre el total
//c) el NOMBRE del  mas barato de los elaborados
    if(contadorElaborados == 0)
    {
        document.write("No hubo productos elaborados para calcular el porcentaje sobre el total de productos ingresados."+ "<br>");
        document.write("No hubo productos elaborados para calcular el más barato."+ "<br>");
    } else {
        porcentajeProductosElaboradosSobreElTotal = contadorElaborados * 100 / contadorProductosTotales;
        document.write("El nombre del más barato de los elaborados: "+ nombreDelMasBarato+ "<br>");
    }
//d)el tipo de mercadería  que mas aparece
    document.write("El tipo de mercaderia que más aparece es: "+tipoQueMasAparece+ "<br>");
}