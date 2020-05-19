function nombre() {
    var nombre = prompt("Escribe tu nombre");
    document.getElementById("nombre").innerHTML = nombre;
    console.log(nombre);
}

function coche() {
    var modelos = [];
    var cont = "";
    for (var i = 0; i <= 2; i++) {
        var x = prompt("Ingresa el modelo de tu coche:");
        modelos[i] = x;
    }
    for (var i = 0; i <= 2; i++) {
        cont += modelos[i] + " ";
    }
    document.getElementById("modelos").innerHTML = cont;

    
    console.log(modelos);
}

nombre();
coche();

