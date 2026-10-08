function leerVentas(dias) {
    let ventas = [];

    for (let i = 0; i < dias.length; i++) {
        let venta = Number(prompt("Venta del " + dias[i] + ":"));
        ventas.push(venta);
    }

    return ventas;
}

function calcularTotal(ventas) {
    let suma = 0;

    for (let i = 0; i < ventas.length; i++) {
        suma = suma + ventas[i];
    }

    return suma;
}

function mostrarReporte(dias, ventas) {
    for (let i = 0; i < dias.length; i++) {
        console.log(dias[i] + ": $" + ventas[i]);
    }

    console.log("Total semana: $" + calcularTotal(ventas));
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