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

/** 
 * ARRAYS--------------------------------
 */

let numeros:number[] = [3,5,12,7];
let numeros2:number[] = [23,1,1,6];
let mixtos:(number|string)[] = [3,"Jose",23];
let array2d:number[][] = [[1,2,3],[4,5,6]];
console.log(`La posicion 0 del array numeros es ${numeros[0]}`);
console.log(`La posicion 0 del array2d es ${array2d[0]!=undefined ? array2d[0][0]:0}`);

let numeros3 = [...numeros,...numeros2];
console.log(`La concatenacion de los arrays numeros y numeros 2 es ${numeros3}`);
