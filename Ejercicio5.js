function leerVentas(dias) {
    let ventas = [];

    for (let i = 0; i < dias.length; i++) {
        let venta = Number(prompt("Venta del " + dias[i] + ":"));
        ventas.push(venta);
    }

    return ventas;
}

function buscarPosicionMayor(ventas) {
    let posicion = 0;

    for (let i = 1; i < ventas.length; i++) {
        if (ventas[i] > ventas[posicion]) {
            posicion = i;
        }
    }

    return posicion;
}

function buscarPosicionMenor(ventas) {
    let posicion = 0;

    for (let i = 1; i < ventas.length; i++) {
        if (ventas[i] < ventas[posicion]) {
            posicion = i;
        }
    }

    return posicion;
}

function mostrarReporte(dias, ventas) {
    let posicionMayor = buscarPosicionMayor(ventas);
    let posicionMenor = buscarPosicionMenor(ventas);

    let diferencia = ventas[posicionMayor] - ventas[posicionMenor];

    console.log("Mejor día: " + dias[posicionMayor] + " ($" + ventas[posicionMayor] + ")");
    console.log("Peor día: " + dias[posicionMenor] + " ($" + ventas[posicionMenor] + ")");
    console.log("Diferencia: $" + diferencia);
}

let dias = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
];

let ventas = leerVentas(dias);

mostrarReporte(dias, ventas);