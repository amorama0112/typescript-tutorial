/***    
 * 
 * Tipos de datos primitivos----------------------
 * string
 * number
 * boolean
 * 
 */

let nombre:string = "Jose";
let edad:number = 18;
let mayorEdad:boolean = true;


/***    
 * 
 * Tipos de datos especiales----------------------
 * any
 * unknown
 * void
 * 
 */

let cualquierCosa:any = "hola";
cualquierCosa = 10;
cualquierCosa = true;

let tipoDesconocido:unknown = "hola";
tipoDesconocido = 10;
tipoDesconocido = "adios";

if(typeof tipoDesconocido === "string"){
    console.log(tipoDesconocido.toUpperCase());
}
console.log("Tu nombre es " + nombre);
console.log(`Tu nombre es ${nombre}`);
/***
 * 
 * Declaracion de variables-----------------------
 * var (declaracion global)
 * let (declaracion de bloque)
 * const (declaracion de constantes)
 */


var x;
x="Jose";

if(true){
    x="maria";
}

console.log(x);

let y;
const z = 10;
