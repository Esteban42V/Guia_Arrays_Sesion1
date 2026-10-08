function leerNumeros(cantidad) {
    let numeros = [];

    for (let i = 0; i < cantidad; i++) {
        let numero = Number(prompt("Número " + (i + 1) + ":"));
        numeros.push(numero);
    }

    return numeros;
}

function obtenerUltimo(numeros) {
    let ultimo = numeros[numeros.length - 1];

    return ultimo;
}

function obtenerPrimero(numeros) {
    let primero = numeros[0];

    return primero;
}

function mostrarMedio(numeros) {
    let medio = Math.floor(numeros.length / 2);

    if (numeros.length % 2 == 0) {
        console.log("Del medio: " + numeros[medio - 1] + " y " + numeros[medio]);
    } else {
        console.log("Del medio: " + numeros[medio]);
    }
}

function mostrarResultados(numeros) {
    console.log("Primero: " + obtenerPrimero(numeros));
    console.log("Último: " + obtenerUltimo(numeros));
    mostrarMedio(numeros);
}

let cantidad = Number(prompt("¿Cuántos números?"));

while (cantidad < 1) {
    cantidad = Number(prompt("¿Cuántos números?"));
}

let numeros = leerNumeros(cantidad);

mostrarResultados(numeros);