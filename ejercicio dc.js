/* 
Escribe un programa en JavaScript que simule una caja de tienda. El programa debe:

Solicitar al usuario que ingrese el total de la compra.
Solicitar al usuario que ingrese la cantidad pagada.
Calcular el cambio que se debe devolver.
Mostrar el cambio desglosado en diferentes denominaciones de monedas (ej. billetes de $100, $50, monedas de $1, $0.25, etc.).
Ciclos (opcional), condicionales, variables, listas
*/

let totalCompra = parseFloat(prompt("Ingrese Total de compra : "));
let cantidadPagada = parseFloat(prompt("Ingrese Cantidad Pagada : "));

let vuelto = cantidadPagada - totalCompra;

let denominaciones = [
    { nombre: 'billete de s/200', valor: 200.00 },
    { nombre: 'billete de s/100', valor: 100.00 },
    { nombre: 'billete de s/50', valor: 50.00 },
    { nombre: 'billete de s/20', valor: 20.00 },
    { nombre: 'billete de s/10', valor: 10.00 },
    { nombre: 'moneda de s/5', valor: 5.00 },
    { nombre: 'moneda de s/2', valor: 2.00 },
    { nombre: 'moneda de s/1', valor: 1.00 },
    { nombre: 'moneda de s/0.5', valor: 0.5 },
    { nombre: 'moneda de s/0.2', valor: 0.2 },
    { nombre: 'moneda de s/0.1', valor: 0.1 }
];

let resultado = {};

    for (let i = 0; i < denominaciones.length; i++) {
        let denominacion = denominaciones[i];
        let cantidadDeDenominacion = Math.floor(vuelto / denominacion.valor);
        vuelto = (vuelto % denominacion.valor).toFixed(2); // Redondeo a dos decimales para evitar problemas de precisión
        
        if (cantidadDeDenominacion > 0) {
            resultado[denominacion.nombre] = cantidadDeDenominacion;
        }
    }

    console.log(resultado);

