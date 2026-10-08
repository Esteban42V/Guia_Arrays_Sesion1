function leerProductos(cantidad) {
    let productos = [];

    for (let i = 0; i < cantidad; i++) {
        let producto = prompt("Producto " + (i + 1) + ":");
        productos.push(producto);
    }

    return productos;
}

function mostrarLista(productos) {
    console.log("Lista del mercado:");

    productos.forEach((producto, i) => {
        console.log((i + 1) + ". " + producto);
    });

    console.log("Total: " + productos.length + " productos");
}

let cantidad = Number(prompt("¿Cuántos productos?"));

let productos = leerProductos(cantidad);

mostrarLista(productos);

// No se puede detener un forEach a la mitad de la misma forma que un while o un for.
// forEach sirve cuando queremos recorrer todos los elementos.