function leerPalabras(cantidad) {
    let palabras = [];

    for (let i = 0; i < cantidad; i++) {
        let palabra = prompt("Palabra " + (i + 1) + ":");
        palabras.push(palabra);
    }

    return palabras;
}

function invertir(palabras) {
    let invertidas = [];

    for (let i = palabras.length - 1; i >= 0; i--) {
        invertidas.push(palabras[i]);
    }

    return invertidas;
}

function unirConComas(palabras) {
    let texto = "";

    for (let i = 0; i < palabras.length; i++) {
        texto = texto + palabras[i];

        if (i < palabras.length - 1) {
            texto = texto + ", ";
        }
    }

    return texto;
}

function mostrarResultados(palabras, invertidas) {
    console.log("Original: " + unirConComas(palabras));
    console.log("Invertido: " + unirConComas(invertidas));
}

let cantidad = Number(prompt("¿Cuántas palabras?"));

let palabras = leerPalabras(cantidad);
let invertidas = invertir(palabras);

mostrarResultados(palabras, invertidas);