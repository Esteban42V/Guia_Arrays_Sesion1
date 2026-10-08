function existeEnLista(invitados, valor) {
    let encontrado = false;
    let i = 0;

    while (i < invitados.length && encontrado == false) {
        if (invitados[i] == valor) {
            encontrado = true;
        }

        i = i + 1;
    }

    return encontrado;
}

function leerNombres() {
    let nombres = [];
    let nombre = prompt("Nombre:");

    while (nombre != "fin") {
        nombres.push(nombre);
        nombre = prompt("Nombre:");
    }

    return nombres;
}

function contarEntraron(invitados, nombres) {
    let entraron = 0;

    for (let i = 0; i < nombres.length; i++) {
        if (existeEnLista(invitados, nombres[i])) {
            entraron = entraron + 1;
        }
    }

    return entraron;
}

function contarRechazados(invitados, nombres) {
    let rechazados = 0;

    for (let i = 0; i < nombres.length; i++) {
        if (existeEnLista(invitados, nombres[i]) == false) {
            rechazados = rechazados + 1;
        }
    }

    return rechazados;
}

function mostrarResultados(invitados, nombres) {
    for (let i = 0; i < nombres.length; i++) {
        if (existeEnLista(invitados, nombres[i])) {
            console.log(nombres[i] + " puede entrar");
        } else {
            console.log(nombres[i] + " no está en la lista");
        }
    }

    console.log("Entraron: " + contarEntraron(invitados, nombres));
    console.log("Rechazados: " + contarRechazados(invitados, nombres));
}

let invitados = ["ana", "carlos", "luisa", "pedro", "sofía"];

let nombres = leerNombres();

mostrarResultados(invitados, nombres);