
class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre.toLowerCase();
        this.precio = parseFloat(precio);
        this.stock = stock;
    }

    vender(cantidad) {
        if (cantidad > 0 && cantidad <= this.stock) {
            this.stock -= cantidad;
        }
    }
}

const productos = [];

productos.push(new Producto(0, "Heladera", 850000, 5));
productos.push(new Producto(1, "Lavarropas", 720000, 8));
productos.push(new Producto(2, "Microondas", 180000, 10));
productos.push(new Producto(3, "Pava electrica", 45000, 15));
productos.push(new Producto(4, "Licuadora", 95000, 12));

console.table(productos);

const buscado = productos.find(p => p.nombre === "Microondas")
console.log("Producto buscado: ", buscado)

const disponibles = productos.filter(p => p.stock > 0)
console.table(disponibles)

while (confirm("¿Deseas comprar un producto en Distribuidora LUMA?")) {
    let listadoProductos = "";

    for (const producto of productos) {
        if (producto.stock > 0) {
            listadoProductos += producto.id + " " + producto.nombre +
                " - $" + producto.precio + "\n";
        }
    }

    let indiceProducto = parseInt(
        prompt("¿Qué producto deseas comprar?\n" + listadoProductos)
    );

    if (indiceProducto >= 0 && indiceProducto < productos.length) {

        let cantidad = parseInt(
            prompt("¿Cuántas unidades deseas comprar?")
        );

        if (cantidad > 0 && cantidad <= productos[indiceProducto].stock) {
            productos[indiceProducto].vender(cantidad);
            alert("Compra realizada correctamente");
        } else {
            alert("Stock insuficiente o cantidad inválida");
        }

    } else {
        alert("Ingreso inválido");
    }
}


const total = productos.reduce((acc, p) => acc + p.precio * p.stock, 0)

console.log("valor total del stock: $" + total)

console.table(productos);
