function veiculos (marca,modelo,personas,gasolina,velocidad,estado){
this.marca = marca;
this.modelo = modelo;
this.personas = personas;
this.gasolina = gasolina;
this.velocidad = velocidad;
this.estado = estado;

this.arranque = function(){
    this.estado = true;
    this.gasolina -=10;
    return`Gasolina Restante: ${this.gasolina}%`;
};
this.frenar = function(){
    this.velocidad -= 20;
    return `Velocidad Actual ${this.velocidad} K/H`
}
this.acelerar = function(){
    this.velocidad += 10;
    return `Velocidad Actual ${this.velocidad} K/H`
    this.gasolina -=10;
    return`Gasolina Restante: ${this.gasolina}%`;
}
this.apagar = function(){
    this.estado = false;
    return`Gasolina: ${this.gasolina}`;
}
this.info = function(){
    return`Marca: ${this.marca} \nModelo: ${this.modelo} \nPersonas: ${this.personas} \nGasolina: ${this.gasolina} \nVelocidad: ${this.velocidad} K/H \nEsta encendido: ${this.estado}`;
}
}
const C1 = new veiculos("Chebrolet", 1999, 4, 100,150,false)
console.log(C1.info());
console.log(C1.arranque());
console.log(C1.acelerar());
console.log(C1.frenar());
console.log(C1.apagar());
