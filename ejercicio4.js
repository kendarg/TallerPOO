function libro(nombre,paginas,ubicacion,prestado) {
    this.nombre = nombre;
    this.prestado = prestado;
    this.paginas = paginas;
    this.ubicacion = ubicacion;

    this.info = function () {
        return `Nombre: ${this.nombre} \nPaginas: ${this.paginas} \nUbicacion: ${this.ubicacion} \nEsta Disponible: ${this.prestado} \n ---------`;
    }

    this.devolver = function(){
        if(this.prestado === false){
            this.prestado = true;
            return `El Libro se a devuelto \n -----------`;
        }else{
            return`[ERROR] El Libro no se a Devuelto \n ---------`;
        }
    }

    this.prestar = function(){
        if(this.prestado === false){
            return`[ERROR] El Libro no se a Devuelto \n ---------`;
        }else{
            this.prestado = false;
            return`El Libro se a Prestado \n ---------`;

        }
    }

}
const l1 = new libro("Don Quijote de la Mancha", 1560,"Estanteria 3", false);
const l2 = new libro("El Señor de los Anillos 2: Las Dos Torres", 408, "Estanteria 1", false);
const l3 = new libro("harry potter y la piedra filosofal", 256, "Estanteria 2", true);
console.log(l1.info());
console.log(l1.devolver());
console.log(l1.info());
console.log(l1.prestar());
console.log(l1.info());


