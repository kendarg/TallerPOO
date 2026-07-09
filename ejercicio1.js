function computador (marca, procesador, ramGM, precio){
    this.marca = marca;
    this.procesador = procesador;
    this.ramGM = ramGM;
    this.precio = precio;

    this.info = function(){
        return `Marca: ${this.marca}\nProcesador: ${this.procesador} \nRAM: ${this.ramGM}, \nPresio: $${this.precio} \n--------------`;
        
    }
}
const hp = new computador ("Hiler Paker","AMD Ryzen 5 7520U",16, 1799000 )
const lenovo = new computador ("Lenovo","Intel Core i7-13620H ",16, 2679900 )
const acer = new computador ("ACER","INTEL CORE I5 13420H",16, 3092900 )
console.log(hp.info());
console.log(lenovo.info());
console.log(acer.info());
