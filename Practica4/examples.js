//race condition

var elAsiento = "libre"

function reservarAsiento( nombre ) {
    if( elAsiento == "libre" ) {
    elAsiento = nombre
    }
}

//---------------------------------