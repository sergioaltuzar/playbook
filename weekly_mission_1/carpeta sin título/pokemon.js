export default class pokemon{
    constructor(nombre){
        this.nombre=nombre;
    }
    sayHello(){
        console.log(`Mi pokemon ${this.nombre} te saluda !!!`);
    }
    sayMessage(message){
        console.log(`Mi pokemon ${this.nombre} dice: ${mensaje} !`);
    }
}