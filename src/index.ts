// /***    
//  * 
//  * Tipos de datos primitivos----------------------
//  * string
//  * number
//  * boolean
//  * 
//  */

import assert = require("assert");

// import http = require("http");

// let nombre:string = "Jose";
// let edad:number = 18;
// let mayorEdad:boolean = true;


// /***    
//  * 
//  * Tipos de datos especiales----------------------
//  * any
//  * unknown
//  * void
//  * 
//  */

// let cualquierCosa:any = "hola";
// cualquierCosa = 10;
// cualquierCosa = true;

// let tipoDesconocido:unknown = "hola";
// tipoDesconocido = 10;
// tipoDesconocido = "adios";

// if(typeof tipoDesconocido === "string"){
//     console.log(tipoDesconocido.toUpperCase());
// }
// console.log("Tu nombre es " + nombre);
// console.log(`Tu nombre es ${nombre}`);
// /***
//  * 
//  * Declaracion de variables-----------------------
//  * var (declaracion global)
//  * let (declaracion de bloque)
//  * const (declaracion de constantes)
//  */


// var x;
// x="Jose";

// if(true){
//     x="maria";
// }

// console.log(x);

// let y;
// const z = 10;

// /** 
//  * ARRAYS--------------------------------
//  */

// let numeros:number[] = [3,5,12,7];
// let numeros2:number[] = [23,1,1,6];
// let mixtos:(number|string)[] = [3,"Jose",23];
// let array2d:number[][] = [[1,2,3],[4,5,6]];
// console.log(`La posicion 0 del array numeros es ${numeros[0]}`);
// console.log(`La posicion 0 del array2d es ${array2d[0]!=undefined ? array2d[0][0]:0}`);

// let numeros3 = [...numeros,...numeros2];
// console.log(`La concatenacion de los arrays numeros y numeros 2 es ${numeros3}`);

// /** 
//  * Metodos para trabajar con arrays----------------
//  * 
//  * push() - añade un elemento al final del array
//  * 
//  * pop() - elimina el ultimo elemento del array
//  * 
//  * shift() - elimina el primer elemento del array
//  * 
//  * unshift() - añade un elemento al inicio del array
//  */

// let anumeros = [3,5,12,7];
// anumeros.push(23); // [3,5,12,7,23]
// anumeros.push(1,34,12); // [3,5,12,7,23,1,34,12]

// anumeros.pop(); // [3,5,12,7,23,1,34]

// anumeros.unshift(0); // [0,3,5,12,7,23,1,34]

// anumeros.shift(); // [3,5,12,7,23,1,34]

// //Acceso y remplazo
// console.log(anumeros[2]); // 12
// anumeros[0] = -1;
// console.log(anumeros.length); // 7
// console.log(anumeros[anumeros.length - 1]); // 34

// //Busqueda de elemetos
// let frutas = ["manzana","pera","platano"];
// console.log(frutas.indexOf("pera")); // 1

// console.log(frutas.includes("platano")); // true

// //find : devuelve el primer elemento que cumple la condicion
// // value[x]!.length>5 --NOT NULL ASSERTION- ! indica que el valor no es null ni undefined
// console.log(frutas.find((value)=>{return value.length>5})); // manzana
// console.log(frutas.findIndex((value)=>{return value.length>5})); // 0

// //Foreach : recorre el array y ejecuta la funcion por cada elemento
// frutas.forEach((value:string)=>{console.log(value)}); // manzana pera platano

// //Map : devuelve un nuevo array con los valores modificados
// let frutasUPPER=frutas.map((fruta:string)=>{return fruta.toUpperCase()}); // ["MANZANA","PERA","PLATANO"]
// console.log(frutasUPPER);

// //filter : devuelve un nuevo array con los elementos que cumplen la condicion
// let frutasFiltradas=frutas.filter((fruta:string)=>{return fruta.length>5}); // ["manzana","platano"]
// console.log(frutasFiltradas);

// //reduce : acumula el valor de los elementos del array
// let numerosEnteros = [3,5,12,7];
// let total = numerosEnteros.reduce((acc, elementoActual)=>{return acc+=elementoActual}); // 27
// console.log(total);

// let miNombre = ["Alejandro", "Morilla", "Amarillo"];
// let miNombreCompleto = miNombre.reduce((elementoAnterior, elementoActual)=>{return elementoAnterior +" "+elementoActual}); // "Alejandro Morilla Amarillo"
// console.log(miNombreCompleto);


// //ordenacion
// console.log(numerosEnteros.sort((a,b)=>{return a-b})); // [3,5,7,12]

// //slice : devuelve una copia de una parte del array
// let numerosSlice = numerosEnteros.slice(1,3); // [5,7]
// console.log(numerosSlice);

// //join : une elementos del array en un string
// console.log(miNombre.join(" ")); // "Alejandro Morilla Amarillo"

// //tuplas 
// let nombreEdad: [string, number];
// nombreEdad = ["Alejandro", 21];
// console.log(`Me llamo ${nombreEdad[0]} y tengo ${nombreEdad[1]} años`);

// //funciones declaradas
// /**
//  * Funcion para sumar dos parametros numericos
//  * @param a primer parametro
//  * @param b segundo parametro
//  * @returns resultado de la suma
//  */ 
// function sumar(a:number, b:number):number {
//     return a + b;
// }

// let suma = sumar(2,7);

// //funcion anonima
// const fResta = function (a:number, b:number):number {
//     return a-b;
// }

// console.log(fResta(10,4));

// function saludar(nomnbre:string, apellido?:string) {
//     apellido!=undefined ? console.log(`Hola ${nombre} ${apellido}`) : console.log(`Hola ${nombre}`);

//     console.log(`Hola ${nombre} ${apellido ?? ""}`); // si apellido es null o undefined se usa ""
// }

// function potencia(base:number, exponente:number=2):number {
//     return base**exponente;
// }

// console.log(potencia(3,3)); // 27
// console.log(potencia(4)); // 16

// //funcion flecha
// const fMultiplicar = (a:number, b:number):number => {return a*b};

// //funcion callback
// function math(a:number, b:number, opceracion:(a:number, b:number)=>number){
//     return opceracion(a,b);
// }

// math(3,4,fMultiplicar); // 12

// function multipleParams(...valores:number[]) {
//    let suma = valores.reduce((previousNumber:number, currentNumber:number) => {return previousNumber += currentNumber});
//    console.log(suma);
// }

// multipleParams(3,4,5,6);

// //funciones asincronas - funciones que no interrumpen la ejecucion del programa mientras esperan una respuesta
// //async - indica que la funcion es asincrona y devuelve una promesa
// //await - espera a que se resuelva la promesa

// interface DataAPI {
//     message: string;
//     status: string;
// }

// async function getApiData(url:string):Promise<DataAPI> {
//      const respuesta = await fetch(url);
//      const datos = respuesta.json() as Promise<DataAPI>;

//      return datos;
// }



// getApiData("https://dog.ceo/api/breeds/image/random").then((value:DataAPI)=>{console.log(value.message)}).catch((error)=>{console.log(error)});

//Creacion de objetos literales
// let persona = {
//     id:1,
//     nombre: "Ana",   
//     apellido: "Lopez",
//     direccion: {
//         calle: "Calle Falsa",
//         numero: 123,
//         ciudad: "Moron",
//     },
//     edad: 25,
//     esmayorEdad: function():boolean {return this.edad >= 18?true:false;}
// }

// //console.log(persona('id'));
// console.log(persona.nombre);

// persona.edad=15;

// const alertConfiguration = {
//     time: 200,
//     type: "danger",
//     position: "center",
// }

// //Objetos type
// //Plantilla que me permite reutilizar codigo

// type Usuario = {
//     readonly id:number,
//     userName:string,
//     email:string,
//     estaActivo:boolean,
//     direccion?:string, //propiedad opcional
// }

// type PuestoTrabajo = {
//     puestoTrabajo:string,
//     oficina:string,
// }

// type Emlpeado = Usuario & PuestoTrabajo; //Interseccion de tipos

// let empleado1:Emlpeado = {
//     id: 2,
//     userName: "empleado1",
//     email: "emailemple@gmail.com",
//     estaActivo: true,
//     puestoTrabajo: "Desarrollador",
//     oficina: "Madrid",
// }

// console.log(empleado1);

// let usuario1:Usuario = {
//     id: 1,
//     userName: "usuario1",
//     email: "email@prueba.com",
//     estaActivo: true,
// }
// //usuario1.id = 2; Error: no se puede modificar una propiedad readonly
// usuario1.estaActivo = false;

type Saludo = `Hola ${string}`;

let saludar:Saludo = "Hola Juan";