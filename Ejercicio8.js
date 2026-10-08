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

function calcularPromedio(ventas) {
    let suma = calcularTotal(ventas);
    let promedio = suma / ventas.length;

    return promedio;
}

function contarMayoresQue(ventas, limite) {
    let cantidad = 0;

    for (let i = 0; i < ventas.length; i++) {
        if (ventas[i] > limite) {
            cantidad = cantidad + 1;
        }
    }

    return cantidad;
}

function mostrarDiasSobre(dias, ventas, limite) {
    for (let i = 0; i < ventas.length; i++) {
        if (ventas[i] > limite) {
            console.log(dias[i] + ": $" + ventas[i]);
        }
    }
}

function mostrarResultados(dias, ventas) {
    let promedio = Math.round(calcularPromedio(ventas));

    console.log("Promedio diario: $" + promedio);
    console.log("Días por encima del promedio:");

    mostrarDiasSobre(dias, ventas, promedio);

    console.log("Total: " + contarMayoresQue(ventas, promedio) + " días");
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

mostrarResultados(dias, ventas);