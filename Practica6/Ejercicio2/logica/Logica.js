// .....................................................................
// Logica.js
// .....................................................................
const sqlite3 = require( "sqlite3" )

// .....................................................................
// .....................................................................
module.exports = class Logica {

    // .................................................................
    // nombreBD: Texto
    // -->
    // constructor () -->
    // .................................................................
    constructor( nombreBD, cb ) {
        
        this.laConexion = new sqlite3.Database(
        nombreBD,
        ( err ) => {

            if( ! err ) {
            this.laConexion.run( "PRAGMA foreign_keys = ON" )
            }
            cb( err)

        })
    } // ()

    // .................................................................
    // nombreTabla:Texto
    // -->
    // borrarFilasDe() -->
    // .................................................................
    borrarFilasDe( tabla ) {

        return new Promise( (resolver, rechazar) => {

            this.laConexion.run(
            "delete from " + tabla + ";",
            (err)=> ( err ? rechazar(err) : resolver() )

            )
        })
    } // ()
    // .................................................................
    // borrarFilasDeTodasLasTablas() -->
    // .................................................................
    async borrarFilasDeTodasLasTablas() {

        await this.borrarFilasDe( "Matricula" )
        await this.borrarFilasDe( "Asignatura" )
        await this.borrarFilasDe( "Persona" )

    } // ()

    // .................................................................
    // datos:{dni:Texto, nombre:Texto: apellidos:Texto}
    // -->
    // insertarPersona() -->
    // .................................................................
    insertarPersona( datos ) {
        var textoSQL =
        'insert into Persona values( $dni, $nombre, $apellidos );'
        var valoresParaSQL = { $dni: datos.dni, $nombre: datos.nombre,
        $apellidos: datos.apellidos }

        return new Promise( (resolver, rechazar) => {

            this.laConexion.run( textoSQL, valoresParaSQL, function( err ) {
                ( err ? rechazar(err) : resolver() )
            })

        })
    } // ()


    // .................................................................
    // datos:{codigo:Texto, nombre:Texto, creditos:Texto}
    // -->
    // insertarAsignatura() -->
    // .................................................................

    insertarAsignatura( datos ) {
        var textoSQL =
        'insert into Asignatura values( $codigo, $nombre, $creditos);'
        var valoresParaSQL = { $codigo: datos.codigo, $nombre: datos.nombre, $creditos: datos.creditos}

        return new Promise( (resolver, rechazar) => {

            this.laConexion.run( textoSQL, valoresParaSQL, function( err ) {
                ( err ? rechazar(err) : resolver() )
            })

        })
    } // ()


    // .................................................................
    // datos:{dni:Texto, codigo:Texto}
    // -->
    // insertarMatricula() -->
    // .................................................................

    insertarMatricula( datos ) {
        var textoSQL =
        'insert into Matricula values( $dni, $codigo);'
        var valoresParaSQL = { $dni: datos.dni, $codigo: datos.codigo}

        return new Promise( (resolver, rechazar) => {

            this.laConexion.run( textoSQL, valoresParaSQL, function( err ) {
                ( err ? rechazar(err) : resolver() )
            })

        })
    } // ()


    // .................................................................
    // dni:Texto
    // -->
    // buscarPersonaPorDNI() <--
    // <--
    // {dni:Texto, nombre:Texto: apellidos:Texto}
    // .................................................................
    buscarPersonaConDNI( dni ) {

        var textoSQL = "select * from Persona where dni=$dni";
        var valoresParaSQL = { $dni: dni }

        return new Promise( (resolver, rechazar) => {

            this.laConexion.all( textoSQL, valoresParaSQL,
            ( err, res ) => {
            ( err ? rechazar(err) : resolver(res) )
            })

        })
    } // ()

    // .................................................................
    // dni:Texto
    // -->
    // buscarAsignaturaConCodigo() <--
    // <--
    // {dni:Texto, nombre:Texto: creditos:Texto}
    // .................................................................
    buscarAsignaturaConCodigo( codigo ) {

        var textoSQL = "select * from Asignatura where codigo=$codigo";
        var valoresParaSQL = { $codigo: codigo }

        return new Promise( (resolver, rechazar) => {

            this.laConexion.all( textoSQL, valoresParaSQL,
            ( err, res ) => {
            ( err ? rechazar(err) : resolver(res) )
            })

        })
    } // ()


    // .................................................................
    // apellidos:Texto
    // -->
    // buscarAsignaturasConApellidos() <--
    // <--
    // [{codigo: texto}]
    //
    // códigos de asignatura en que una persona está matriculada
    // .................................................................
    buscarAsignaturasConApellidos(apellidos) {
        var textoSQL = "SELECT DISTINCT m.codigo FROM Matricula m JOIN Persona p ON m.dni = p.dni WHERE p.apellidos = $apellidos";
        var valoresParaSQL = { $apellidos: apellidos };

        return new Promise((resolver, rechazar) => {
            this.laConexion.all(textoSQL, valoresParaSQL,
                (err, res) => {
                    (err ? rechazar(err) : resolver(res))
                }
            );
        });
    } // ()


    // .................................................................
    // dni:Texto
    // -->
    // buscarMatriculasConDNI() <--
    // <--
    // [{dni: texto, codigo:texto}]
    // .................................................................
    buscarMatriculasConDNI(dni) {
        var textoSQL = "SELECT dni, codigo FROM Matricula WHERE dni = $dni";
        var valoresParaSQL = { $dni: dni };

        return new Promise((resolver, rechazar) => {
            this.laConexion.all(textoSQL, valoresParaSQL,
                (err, res) => {
                    (err ? rechazar(err) : resolver(res))
                }
            );
        });
    } // ()
    // .................................................................
    // cerrar() -->
    // .................................................................
    cerrar() {
        
        return new Promise( (resolver, rechazar) => {

            this.laConexion.close( (err)=>{
            ( err ? rechazar(err) : resolver() )
            })

        })
    } // ()

} // class
// .....................................................................
// .....................................................................
