function leerDistancias(cantidad) {
    let distancias = [];

    for (let i = 0; i < cantidad; i++) {
        let distancia = Number(prompt("Distancia " + (i + 1) + ":"));
        distancias.push(distancia);
    }

    return distancias;
}

function obtenerEnvioGratis(distancias) {
    let gratis = distancias.filter(function(distancia) {
        return distancia <= 3;
    });

    return gratis;
}

function contarConEnvio(distancias) {
    let pedidosConEnvio = distancias.filter(function(distancia) {
        return distancia > 3 && distancia <= 10;
    });

    return pedidosConEnvio.length;
}

function buscarPrimeroFuera(distancias) {
    let fuera = distancias.find(function(distancia) {
        return distancia > 10;
    });

    return fuera;
}

function mostrarResultado(distancias) {
    let gratis = obtenerEnvioGratis(distancias);
    let cantidadConEnvio = contarConEnvio(distancias);
    let primeroFuera = buscarPrimeroFuera(distancias);

    console.log("Envío gratis (" + gratis.length + "): " + gratis.join(", "));
    console.log("Pagan envío: " + cantidadConEnvio);

    if (primeroFuera === undefined) {
        console.log("Todos los pedidos están en cobertura");
    } else {
        console.log("Primer pedido fuera de cobertura: " + primeroFuera + " km");
    }
}

let cantidad = Number(prompt("¿Cuántos pedidos?"));
let distancias = leerDistancias(cantidad);

mostrarResultado(distancias);