var miCoche = {
    marca: 'citroen',
    modelo: 'C-2',
    anyo: 2003,
    // creamos un método
    info: function () {
        console.log(`${this.marca}: ${this.modelo} \\ ${this.anyo}`);
    }
}

var ordenador = {
    marca: 'lenovo',
    modelo: 'yoga',
    ram: 16,
    // creamos un método
    info: function () {
        console.log(`${this.marca}: ${this.modelo} \\ ${this.ram}`);
    }
}

var gato = {
        familia: 'Felis silvestris',
        raza: 'persa',
        nacimiento: 'Junio 2018',
        // creamos un método
        info: function () {
            console.log(`${this.familia}: ${this.raza} \\ ${this.nacimiento}`);
        }
}    
