function sumaTotal(productos, categoria) {
  return productos
    .filter( (e) => {
        if(e.categoria === categoria){
            return e;
        }
    })
    .reduce((accu, element) =>{

        accu = accu + element.precio;

        return accu
    } , 0);

}

const productos = [
  { nombre: "Camiseta", categoria: "Ropa", precio: 25.99 },
  { nombre: "Pantalón", categoria: "Ropa", precio: 40.00 },
  { nombre: "Auriculares", categoria: "Electrónica", precio: 59.99 },
  { nombre: "Teclado", categoria: "Electrónica", precio: 30.00 },
];

console.log(sumaTotal(productos, "Ropa"));         // Total: 65.99
console.log(sumaTotal(productos, "Electrónica"));  // Total: 89.99
