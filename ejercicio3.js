function estudiante(nombre,salon,edad,nota){
    this.nombre = nombre;
    this.salon = salon;
    this.edad = edad;
    this.nota = nota;

    this.aprobo = function (){
        return this.resultado > 30
    }
    
    this.info = function(){
        return `Nombre: ${this.nombre} \nSalon: ${this.salon} \nEdad: ${this.edad} \nNota: ${this.nota}`;
    }

}
const P1 = new estudiante("Manolo", 3, 15,10);
const P2 = new estudiante("Mimir", 3, 14,30);
const P3 = new estudiante("Kala", 3, 16, 45);
console.log(P1.info());
console.log(`Aprobo: ${P1.aprobo()} \n-------`);
console.log(P2.info());
console.log(`Aprobo: ${P2.aprobo()} \n-------`);
console.log(P3.info());
console.log(`Aprobo: ${P3.aprobo()} \n-------`);
