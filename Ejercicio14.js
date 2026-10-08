function leerPrecios(cantidad) {
    let precios = [];

    for (let i = 0; i < cantidad; i++) {
        let precio = Number(prompt("Precio " + (i + 1) + ":"));
        precios.push(precio);
    }

    return precios;
}

function calcularConIva(precio) {
    let precioIva = Math.round(precio * 1.19);

    return precioIva;
}

function aplicarIvaConMap(precios) {
    let preciosConIva = precios.map((precio) => calcularConIva(precio));

    return preciosConIva;
}

function aplicarIvaConFor(precios) {
    let preciosConIva = [];

    for (let i = 0; i < precios.length; i++) {
        preciosConIva.push(calcularConIva(precios[i]));
    }

    return preciosConIva;
}

function calcularTotal(precios) {
    let suma = 0;

    for (let i = 0; i < precios.length; i++) {
        suma = suma + precios[i];
    }

    return suma;
}

function unirConComas(precios) {
    let texto = "";

    for (let i = 0; i < precios.length; i++) {
        texto = texto + precios[i];

        if (i < precios.length - 1) {
            texto = texto + ", ";
        }
    }

    return texto;
}

function mostrarResultados(precios, preciosConIvaMap, preciosConIvaFor) {
    console.log("Sin IVA: " + unirConComas(precios));
    console.log("Con IVA: " + unirConComas(preciosConIvaMap));
    console.log("Total con IVA: $" + calcularTotal(preciosConIvaMap));

    console.log("Resultado con map y for:");
    console.log(unirConComas(preciosConIvaMap));
    console.log(unirConComas(preciosConIvaFor));
}

let cantidad = Number(prompt("¿Cuántos productos?"));

let precios = leerPrecios(cantidad);

let preciosConIvaMap = aplicarIvaConMap(precios);
let preciosConIvaFor = aplicarIvaConFor(precios);

mostrarResultados(precios, preciosConIvaMap, preciosConIvaFor);