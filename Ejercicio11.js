function leerNumeros(cantidad) {
    let numeros = [];

    for (let i = 0; i < cantidad; i++) {
        let numero = Number(prompt("Número " + (i + 1) + ":"));
        numeros.push(numero);
    }

    return numeros;
}

function existeEnLista(lista, valor) {
    let encontrado = false;
    let i = 0;

    while (i < lista.length && encontrado == false) {
        if (lista[i] == valor) {
            encontrado = true;
        }

        i = i + 1;
    }

    return encontrado;
}

function eliminarRepetidos(numeros) {
    let sinRepetidos = [];

    for (let i = 0; i < numeros.length; i++) {
        if (existeEnLista(sinRepetidos, numeros[i]) == false) {
            sinRepetidos.push(numeros[i]);
        }
    }

    return sinRepetidos;
}

function unirConComas(numeros) {
    let texto = "";

    for (let i = 0; i < numeros.length; i++) {
        texto = texto + numeros[i];

        if (i < numeros.length - 1) {
            texto = texto + ", ";
        }
    }

    return texto;
}

function contarRepetidos(numeros, sinRepetidos) {
    let repetidos = numeros.length - sinRepetidos.length;

    return repetidos;
}

function mostrarResultados(numeros, sinRepetidos) {
    console.log("Sin repetidos: " + unirConComas(sinRepetidos));
    console.log("Se eliminaron " + contarRepetidos(numeros, sinRepetidos) + " repetidos");
}

let numeros = leerNumeros(10);

let sinRepetidos = eliminarRepetidos(numeros);

mostrarResultados(numeros, sinRepetidos);