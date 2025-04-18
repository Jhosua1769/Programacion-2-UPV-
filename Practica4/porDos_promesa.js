// –––––––––––––––––––––––––––––––-
// R -> porDos() -> R (versión con promesa)
// –––––––––––––––––––––––––––––––-
function porDos(n) {
    var prom = new Promise(function(resolver, rechazar) {
        setTimeout(function() {
            if (n != 3) {
                rechazar("Solo se permite el número 3") // <- completado
                return
            }

            resolver(n * 2)
        }, 1000)
    })
    return prom
}

// –––––––––––––––––––––––––––––––-
// main()
// –––––––––––––––––––––––––––––––-
var p = porDos(3)
p.then(function(a) {
    console.log("el resultado de 2*3 es " + a)
}).catch(function(error) {
    console.log("Error:", error)
})
