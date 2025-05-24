// ........................................................
// mainTest1.js
// ........................................................
const Logica = require( "../Logica.js" )


var assert = require ('assert')
const path = require('path');


const dbPath = path.resolve(__dirname, '../../bd/datos.db');

// ........................................................
// main ()
// ........................................................
describe( "Test 1: insertar una persona", function() {
        
    // ....................................................
    // ....................................................
    var laLogica = null

    // ....................................................
    // ....................................................
    it( "conectar a la base de datos", function( hecho ) {

        laLogica = new Logica(
        dbPath,
        function( err ) {

            if ( err ) {

                throw new Error ("No he podido conectar con datos.db")
            }
            hecho()

        })

    }) // it

    // ....................................................
    // ....................................................
    it( "borrar todas las filas", async function() {

        await laLogica.borrarFilasDeTodasLasTablas()

    }) // it


    // ....................................................
    // ....................................................
    it( "puedo insertar una persona",

    async function() {

        await laLogica.insertarPersona(
        {dni: "1239A", nombre: "Josue",
        apellidos: "Bellota Ichaso" } )

        var res = await laLogica.buscarPersonaConDNI( "1239A" )
        assert.equal( res.length, 1, "¿no hay un resulado?" )
        assert.equal( res[0].dni, "1239A", "¿no es 1234A?" )
        assert.equal( res[0].nombre, "Josue", "¿no es Pepe?" )

    }) // it

    // ....................................................
    // ....................................................

    it( "no puedo insertar una persona con dni que ya está",
    async function() {

        var error = null
        try {

            await laLogica.insertarPersona(
            {dni: "1239A", nombre: "Pepa",
            apellidos: "Pérez Pérez" } )

        } catch( err ) {

            error = err
        }
        assert( error, "¿Ha insertado el dni que ya estaba 1234A? (¿No ha pasado por el catch()?" )

    }) // it


    // ....................................................
    // ....................................................
    it( "puedo insertar una Asignatura",

    async function() {

        await laLogica.insertarAsignatura(
        {codigo: "12345", nombre: "Aleman", creditos: "60"} )

        var res = await laLogica.buscarAsignaturaConCodigo( "12345" )
        assert.equal( res.length, 1, "¿no hay un resulado?" )
        assert.equal( res[0].codigo, "12345", "¿no es 12345?" )
        assert.equal( res[0].nombre, "Aleman", "¿no es Aleman?" )
        assert.equal( res[0].creditos, "60", "¿60 Creditos?" )

    }) // it


    // ....................................................
    // ....................................................

    it( "no puedo insertar una Asignatura con codigo que ya está",
    async function() {

        var error = null
        try {

            await laLogica.insertarPersona(
            {codigo: "12345", nombre: "Aleman"} )

        } catch( err ) {

            error = err
        }
        assert( error, "¿Ha insertado el codigo de una asignatura existente?" )

    }) // it


    // ....................................................
    // ....................................................
    it( "puedo insertar una Matricula",

    async function() {

        await laLogica.insertarMatricula(
        {dni: "1239A", codigo: "12345"} )

        var res = await laLogica.buscarMatriculasConDNI( "1239A" )
        assert.equal( res.length, 1, "¿no hay un resulado?" )
        assert.equal( res[0].dni, "1239A", "dni encontrado" )
        assert.equal( res[0].codigo, "12345", "codigo encontrado" )

    }) // it


    // ....................................................
    // ....................................................

    it( "no puedo insertar una Matricula con DNI que ya existe",
    async function() {

        var error = null
        try {

            await laLogica.insertarMatricula(
            {dni: "1239A", codigo: "12344"} )

        } catch( err ) {

            error = err
        }
        assert( error, "¿Ha insertado el codigo de una asignatura existente?" )

    }) // it



    // ....................................................
    // ....................................................

    it( "puedo buscar codigo de asignaturas matriculadas por una persona por apellidos",

    async function() {

        await laLogica.buscarAsignaturasConApellidos(
        {apellidos: "Bellota Ichaso"} )

        var res = await laLogica.buscarMatriculasConDNI( "1239A" )
        assert.equal( res.length, 1, "¿no hay un resulado?" )
        assert.equal( res[0].codigo, "12345", "codigo encontrado" )

    }) // it



    // ....................................................
    // ....................................................
    it( "cerrar conexión a la base de datos",
    async function() {

        try {
        await laLogica.cerrar()
        } catch( err ) {
        // assert.equal( 0, 1, "cerrar conexión a BD fallada: " + err)
        throw new Error( "cerrar conexión a BD fallada: " + err)
        }

    }) // it

}) // describe