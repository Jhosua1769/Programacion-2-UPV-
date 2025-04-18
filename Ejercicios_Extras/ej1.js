function tomarMuestras(xs, f){

    return xs.map((e) => {
        return f(e);
    })
}

function iguales (f, g, xs){
    let m1 = tomarMuestras(xs, f)
    let m2 = tomarMuestras(xs, g)

    for (let i = 0; i < m1.length; i++) {
        if (m1[i] != m2[i]) {
            return false;
        }
        
    }

    return true;
}


//main

let r = tomarMuestras([1,2,3], function(n){
    return n*2;
})

for (let i = 0; i < r.length; i++) {
    
    console.log(r[i])
    
}

let r2 = iguales(function(n){
    return n*2;
}, function(n){
    return n*2;
}, [1,2,3])


if(r2 != true){
    console.log("error")
}


