/**
 * Calcula numéricamente la derivada de una función en un rango [a, b] utilizando el método de diferencias finitas.
 * @param {function} f - Función que se desea derivar. Debe aceptar un número como argumento y devolver un número.
 * @param {number} a - Límite inferior del intervalo donde se calcula la derivada.
 * @param {number} b - Límite superior del intervalo donde se calcula la derivada.
 * @param {number} h - Paso para el cálculo de las diferencias finitas. Un valor pequeño proporciona una mejor aproximación.
 * @returns {Array} - Array de valores que representan la derivada de la función en cada punto del intervalo [a, b].
 */

function calcularDerivada(f, a, b, h) {
    let derivada = [];
    
  
    for (let x = a; x <= b; x += h) {
       
        let y1 = f(x + h);
        let y0 = f(x);
        let dy_dx = (y1 - y0) / h;
        
        derivada.push(dy_dx);
    }
    
    return derivada;
}

function funcionCuadratica(x) {
    return x * x;
}

let a = 0;
let b = 5;
let h = 0.1;

let derivada = calcularDerivada(funcionCuadratica, a, b, h);
console.log(derivada);
