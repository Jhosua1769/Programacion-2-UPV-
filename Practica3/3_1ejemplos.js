
// console.log(`Hora actual: ${hora}:${minutos}:${segundos}`);


const numeroAleatorio = Math.random();
// console.log(numeroAleatorio);


const min = 5; 
const max = 10; 
const numeroRango = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(numeroRango);


const ahora = new Date();
const hora = ahora.getHours().toString(); 
const minutos = ahora.getMinutes().toString();
const horaFormato = hora + minutos;
const horaNumero = Number(horaFormato); 

console.log(horaNumero)