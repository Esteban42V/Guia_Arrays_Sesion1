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

    for (let i = 0; i < productos.length; i++) {
        console.log((i + 1) + ". " + productos[i]);
    }

    console.log("Total: " + productos.length + " productos");
}

let cantidad = Number(prompt("¿Cuántos productos?"));
let productos = leerProductos(cantidad);

mostrarLista(productos);