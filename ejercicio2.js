function mascostas(nombre,especie,raza,edad,tipoPeso,peso){
this.nombre = nombre;
this.especie = especie;
this.raza = raza;
this.edad = edad;
this.tipoPeso = tipoPeso;
this.peso = peso;

this.presentarse = function(){
        return `Nombre: ${this.nombre}\nEspecie: ${this.especie} \nRaza: ${this.raza} \nEdad: ${this.edad} \nPeso: ${this.tipoPeso} ${this.peso} \n--------------`;
    }
}
const perro = new mascostas("Manolo","Perro","Yorkie",10,"Kg",6);
const pajaro = new mascostas("Kala","Pajaro","Pajaro Australiano",12,"Gr",1);
const gato = new mascostas("Kira","Gato","azul Ruso",5,"Kg",8);
console.log(perro.presentarse());
console.log(pajaro.presentarse());
console.log(gato.presentarse());
