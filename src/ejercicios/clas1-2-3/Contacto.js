
export class Contacto{

    //declaro los elementos del constructor
    nombre = '';
    apellido = '';
    email = '';
    online = false;

    constructor( nombre, apellido, email, online ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.online = online;
    }
}
