// 1) 3 variables con precios de productos
let precioProducto1 = 150.50;
let precioProducto2 = 80.25;
let precioProducto3 = 45.00;

// 2) Una variable con la cantidad de dinero que tiene la persona
let dineroDisponible = 700.00;

// 3) Una variable con el total a pagar (la suma de los 3)
let totalAPagar = precioProducto1 + precioProducto2 + precioProducto3;

// 4) Una variable con el vuelto (dinero que le sobra)
let vuelto = dineroDisponible - totalAPagar;

// Mostrar los resultados en la consola
console.log("--- Detalle de la Compra ---");
console.log("Producto 1: $" + precioProducto1);
console.log("Producto 2: $" + precioProducto2);
console.log("Producto 3: $" + precioProducto3);
console.log("----------------------------");
console.log("Total a pagar: $" + totalAPagar);
console.log("Dinero entregado: $" + dineroDisponible);
console.log("Su vuelto es: $" + vuelto);
