function reducir(lista, sumador, valorInicial) {
    let resultado = valorInicial;

    for (let i = 0; i < lista.length; i++) {
        resultado = sumador(resultado, lista[i]);
    }

    return resultado;
}

const frase = "¡Esta es una frase de prueba!";

const sumador = (acumulador, valorActual) => {
    if (valorActual !== " ") {
        return acumulador + 1; // Incrementa el acumulador si el carácter actual no es un espacio en blanco
    }
    return acumulador; 
};

const cuenta = reducir(frase, sumador, 0);
console.log(cuenta); // Salida: 24
