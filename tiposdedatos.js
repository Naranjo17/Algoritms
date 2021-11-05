//Tipos de datos en Javascript
//Numerico
let numero1 =100;
let numero2 = 50;
console.log(numero1+numero2)

//objetos
let objecto = {
    nombre : "Juan",
    apellido : "Naranjo"
}
console.log(objecto)

//booleano
let bandera = false;
console.log(bandera)

//function
function miFuncion(){}
console.log(miFuncion);

//symbol
let simbolo = Symbol("mi simbolo");
console.log(simbolo)

//clase
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona)

//undefined

let x;
console.log(x)//no se esta definiendo la variable

//null = ausencia de valor
let y = null;
console.log(y)

//arrays(arreglos)

let autos = ['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos)//un array es un objeto

//concatenacion strings
let nombre = 'Juan';
let apellido = 'Naranjo';
let nombreCompleto = nombre + ' ' +apellido;
console.log(nombreCompleto);

//
let uno,dos;
uno = 10, dos = 20;
let z = uno + dos;
console.log(z)
//operadores
a = 3;

a *= 5;
console.log(a)

//
let p = 3, b = 2, c= "3";

let t = p === c;
console.log(t);







