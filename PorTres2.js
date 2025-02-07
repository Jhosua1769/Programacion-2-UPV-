function porTres(n, callback){
    callback(n * 3);
}

function repetirPorTres() {
    
    porTres(3, function(result) {
            console.log("Resultado: ", result);
        });
        repetirPorTres();
    }, 3000);
}


// main
r = porTres(3, function(r) {
    if (r !== 9) {
        console.log("error");
    }
});

repetirPorTres();
