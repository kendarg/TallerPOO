const prompt = require('prompt-sync')();
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
  if(this.estado === true && this.gasolina > 0){
    this.velocidad += 10;
    this.gasolina -= 10;
    if(this.gasolina<= 0){
        this.estado = false;
        this.velocidad = 0;
        return `Velocidad Actual ${this.velocidad} K/H \nGasolina Restante: ${this.gasolina}% \n---------`
    }
    return `Velocidad Actual ${this.velocidad} K/H \nGasolina Restante: ${this.gasolina}% \n---------`
  }else{
    return`El Carro No se Puede Mover por que esta Apagado o No Tiene Gasolina`
    return `Velocidad Actual ${this.velocidad} K/H \nGasolina Restante: ${this.gasolina}% \n---------`
  }
}

this.apagar = function(){
    this.estado = false;
    this.velocidad = 0;
    return`Gasolina: ${this.gasolina}`;
}
this.info = function(){
    return`Marca: ${this.marca} \nModelo: ${this.modelo} \nPersonas: ${this.personas} \nGasolina: ${this.gasolina} \nVelocidad: ${this.velocidad} K/H \nEsta encendido: ${this.estado} \n ----------`;
}
if(this.gasolina === 0){
    this.estado = false;
}
}
const C1 = new veiculos("Chebrolet", 1999, 4, 100,150,false)
const C2 = new veiculos("Masda", 2005, 2, 100,180,false)
const C3 = new veiculos("BMW", 2010, 2, 100,250,false)
console.log(`Hola usuario Bien benido a nuestro consesionario \nQuieres ver los veiculos? \n1) Si\n2) No`);

while(true){
let usuario = Number(prompt(`>`))
switch(usuario){
case 1:
    console.log(C1.info());
    console.log(C2.info());
    console.log(C3.info());
    console.log(`Cual Quieres manejar? \n1) Chebrolet \n2) Masda \n3) BMW`);
    let carro = Number(prompt(`>`))
    switch(carro){
        case 1:
        console.log(C1.arranque());
        console.log(C1.info());
        while(true){
            console.log(`Que deseas hacer? \n1) Acelerar \n2) Frenar \n3) Desender`);
        let opcines = Number(prompt(`>`))
            switch(opcines){
                case 1:
                    console.log(C1.acelerar());
                    console.log(C1.info());
                    break;
                case 2:
                console.log(C1.frenar());
                console.log(C1.info());
                    break;
                case 3 :
                    console.log(C1.apagar());
                    console.log(C1.info());
                    return false;
                default:
                console.log(`[ERROR] Opcion No Valida`);
                return;
            }
        }
        break;
        case 2:
        console.log(C2.arranque());
        console.log(C2.info());
        while(true){
            console.log(`Que deseas hacer? \n1) Acelerar \n2) Frenar \n3)Desender`);
        let opcines = Number(prompt(`>`))
            switch(opcines){
                case 1:
                    console.log(C2.acelerar());
                    console.log(C2.info());
                    break;
                case 2:
                console.log(C2.frenar());
                console.log(C2.info());
                    break;
                case 3 :
                    console.log(C2.apagar());
                    console.log(C2.info());
                    return false;
                default:
                console.log(`[ERROR] Opcion No Valida`);
                return;
            }
        }
        break;
        case 3:
        console.log(C3.arranque());
        console.log(C3.info());
        while(true){
            console.log(`Que deseas hacer? \n1) Acelerar \n2) Frenar \n3)Desender`);
        let opcines = Number(prompt(`>`))
            switch(opcines){
                case 1:
                    console.log(C3.acelerar());
                    console.log(C3.info());
                    break;
                case 2:
                console.log(C3.frenar());
                console.log(C3.info());
                    break;
                case 3 :
                    console.log(C3.apagar());
                    console.log(C3.info());
                    false;
                    return false;
                default:
                console.log(`[ERROR] Opcion No Valida`);
                return;
            }
        }
        break;
        default:
        console.log(`[ERROR] Opcion No Valida`);
        return;
    }
    
    break;
case 2:
    console.log(`Vale Buelva pronto`);
    return false;
    break;
default:
    console.log(`[ERROR] Opcion No Valida`);
    return;
}
}

console.log(C1.info());
console.log(C2.info());
console.log(C3.info());

