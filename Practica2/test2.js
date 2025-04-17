
function counter(lista){

   let count=0;
    
   lista.map((element, index)=>{

    let word = element.split("");

    
   }).reduce((accu, letter, index)=> {

    accu = accu + 1

    return accu;
}, 0)


   return count;
}


function counter(lista) {
    return lista
      .map(element => element.length) 
      .reduce((acc, curr) => acc + curr, 0);
 }



 function counter2(lista) {


    let count = lista.map(element => {

        return element = element.length;

      }) // [4, 4]
      .reduce((accu, element) => {
        
        accu = accu + element;


        return accu;

      }, 0);

      return count
 }


 function counter22(array) {

    let count = 0;

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].length;
       
    }

    for (let i = 0; i < array.length; i++) {
        count = count + array[i];
       
    }

    return count;
 }
 






console.log(counter22(["halo", "halo"])); // 8
 

