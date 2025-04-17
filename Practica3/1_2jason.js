// Definición del objeto JavaScript
var unaPersona = {
    dni: "20123567R",
    nombre: "Juan",
    apellidos: "García Pérez",
    edad: 19,
    telefonos: [696234567, 676456123]
};

// Convertir el objeto a JSON (texto)
var texto = JSON.stringify(unaPersona, null, 2); 

// Convertir el texto JSON de nuevo a un objeto JavaScript
var obj = JSON.parse(texto);

// Mostrar los resultados en la consola
console.log("JSON generado:", texto);
console.log("Objeto reconstruido:", obj);
console.log("Nombre de la persona:", obj.nombre);
