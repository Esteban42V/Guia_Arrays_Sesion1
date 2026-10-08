function leerNotaValida(numero) {
    let nota = Number(prompt("Nota " + numero + ":"));

    while (nota < 0 || nota > 5) {
        console.log("Nota inválida, debe estar entre 0 y 5");
        nota = Number(prompt("Nota " + numero + ":"));
    }

    return nota;
}

function leerNotas(cantidad) {
    let notas = [];

    for (let i = 0; i < cantidad; i++) {
        let nota = leerNotaValida(i + 1);
        notas.push(nota);
    }

    return notas;
}

function calcularPromedio(notas) {
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }

    let promedio = suma / notas.length;

    return promedio;
}

function unirConComas(notas) {
    let texto = "";

    for (let i = 0; i < notas.length; i++) {
        texto = texto + notas[i];

        if (i < notas.length - 1) {
            texto = texto + ", ";
        }
    }

    return texto;
}

function mostrarNotas(notas) {
    let promedio = calcularPromedio(notas);

    console.log("Notas: " + unirConComas(notas));
    console.log("Promedio: " + promedio.toFixed(1));

    if (promedio >= 3.0) {
        console.log("El grupo aprobó");
    } else {
        console.log("El grupo no aprobó");
    }
}

let notas = leerNotas(5);

mostrarNotas(notas);