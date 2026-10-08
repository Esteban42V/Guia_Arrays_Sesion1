function leerPersonas(cantidad) {
    let personas = [];

    for (let i = 0; i < cantidad; i++) {
        let persona = prompt("Persona " + (i + 1) + ":");
        personas.push(persona);
    }

    return personas;
}

function rotarDerecha(personas, k) {
    let rotadas = [];
    let desplazamiento = k % personas.length;

    for (let i = 0; i < personas.length; i++) {
        let posicion = (i - desplazamiento + personas.length) % personas.length;
        rotadas.push(personas[posicion]);
    }

    return rotadas;
}

function unirConComas(personas) {
    let texto = "";

    for (let i = 0; i < personas.length; i++) {
        texto = texto + personas[i];

        if (i < personas.length - 1) {
            texto = texto + ", ";
        }
    }

    return texto;
}

function mostrarResultados(personas, rotadas) {
    console.log("Fila original: " + unirConComas(personas));
    console.log("Fila rotada: " + unirConComas(rotadas));
}

let cantidad = Number(prompt("¿Cuántas personas?"));

let personas = leerPersonas(cantidad);

let k = Number(prompt("¿Cuántas posiciones rotar?"));

let rotadas = rotarDerecha(personas, k);

mostrarResultados(personas, rotadas);