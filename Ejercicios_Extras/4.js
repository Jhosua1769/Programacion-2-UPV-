function puedeTransformarse(cad1, cad2) {
    if (cad1.length !== cad2.length) return false;

    const contarLetras = (cadena) => {
        return cadena.split('').reduce((acc, letra) => {
            acc[letra] = (acc[letra] || 0) + 1;
            return acc;
        }, {});
    };

    const freq1 = contarLetras(cad1);
    const freq2 = contarLetras(cad2);

    for (let letra in freq1) {
        if (freq1[letra] !== freq2[letra]) return false;
    }

    return true;
}

// Ejemplo de uso:
console.log(puedeTransformarse("bankinter", "kabnertin")); // true
console.log(puedeTransformarse("hola", "halo"));           // false
