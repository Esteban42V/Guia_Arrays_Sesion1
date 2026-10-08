function leerCalificaciones(cantidad) {
    let calificaciones = [];

    for (let i = 0; i < cantidad; i++) {
        let calificacion = Number(prompt("Calificación " + (i + 1) + ":"));

        while (calificacion < 1 || calificacion > 5) {
            calificacion = Number(prompt("Calificación " + (i + 1) + ":"));
        }

        calificaciones.push(calificacion);
    }

    return calificaciones;
}

function contarPorEstrellas(calificaciones) {
    let contadores = [0, 0, 0, 0, 0];

    for (let i = 0; i < calificaciones.length; i++) {
        let posicion = calificaciones[i] - 1;
        contadores[posicion] = contadores[posicion] + 1;
    }

    return contadores;
}

function repetirCaracter(caracter, veces) {
    let texto = "";

    for (let i = 0; i < veces; i++) {
        texto = texto + caracter;
    }

    return texto;
}

function buscarPosicionMayor(numeros) {
    let posicion = 0;

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeros[posicion]) {
            posicion = i;
        }
    }

    return posicion;
}

function mostrarResultados(contadores) {
    for (let i = 0; i < contadores.length; i++) {
        let estrellas = repetirCaracter("*", contadores[i]);

        console.log("Estrellas " + (i + 1) + ": " + estrellas + " (" + contadores[i] + ")");
    }

    let posicionMayor = buscarPosicionMayor(contadores);

    console.log("Más frecuente: " + (posicionMayor + 1) + " estrellas");
}

let calificaciones = leerCalificaciones(10);
let contadores = contarPorEstrellas(calificaciones);

mostrarResultados(contadores);