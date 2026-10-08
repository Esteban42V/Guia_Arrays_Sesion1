function leerNumeros(cantidad) {
    let numeros = [];

    for (let i = 0; i < cantidad; i++) {
        let numero = Number(prompt("Número " + (i + 1) + ":"));
        numeros.push(numero);
    }

    return numeros;
}

function esPar(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function filtrarPares(numeros) {
    let pares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (esPar(numeros[i])) {
            pares.push(numeros[i]);
        }
    }

    return pares;
}

function filtrarImpares(numeros) {
    let impares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (esPar(numeros[i]) == false) {
            impares.push(numeros[i]);
        }
    }

    return impares;
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

function mostrarResultados(pares, impares) {
    if (pares.length == 0) {
        console.log("Pares (" + pares.length + "): (ninguno)");
    } else {
        console.log("Pares (" + pares.length + "): " + unirConComas(pares));
    }

    if (impares.length == 0) {
        console.log("Impares (" + impares.length + "): (ninguno)");
    } else {
        console.log("Impares (" + impares.length + "): " + unirConComas(impares));
    }
}

let numeros = leerNumeros(8);

let pares = filtrarPares(numeros);
let impares = filtrarImpares(numeros);

mostrarResultados(pares, impares);