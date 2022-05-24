// declaracion de variable e inicializacion
var nombre= "FLorencia";

//declaracion de variables e inicializacion
let apellido= "Sabatino";
const CURSO= "JavaScript";

//declaracion 
/*let edad
let nombre
let apellido

//asignacion
edad = 33
nombre = "Florencia"
apellido = "Sabatino"*/

const  anioActual=2022;
let altura=1.62;

let numero1=190;
let numero2=80;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;

//concatenacion
let palabra1 = "Hola";
let palabra2 = "Florci";
let frase = palabra1 + " " + palabra2; //hola Florci

//salida de datos console.log

console.log("Bienvenidos a JavaScript")
console.log("Resultado de la suma de los numeros: "+suma)
console.log("Resultado de la suma de los numeros: "+resta)
console.log("Resultado de la suma de los numeros: "+multiplicacion)
console.log("Resultado de la suma de los numeros: "+division)
console.log("La frase es: "+frase)
console.log(suma)

let name = prompt("Ingresa tu nombre");
console.log("Buenas noches "+name)
alert("Buenas Noches "+name)

//parseInt (nro entero) y parseFloat (nro con decimal) (convertir texto numerico en numeros)
//prompt toma siempre los datos que ingresa el usuario como string, datos de caracteteres (texto)

let anioNacimiento = parseInt(prompt ("Ingresa tu año de nacimiento"));
let edad = anioActual - anioNacimiento;
alert("Tenes "+edad+" años");

/*let precio = parseFloat(prompt("Ingresa el precio de tu producto"));
let precioConIva = precio * 1.21;
alert("El precio final con IVA incluido $" +precioConIva);
*/
let anioIngreso = parseInt(prompt ("Ingresa el año de ingreso a la empresa"));
let antiguedad = anioActual - anioIngreso;
alert("Tenes "+antiguedad+" años de antiguedad");


let i = 1
for (let i = 1; i<= 5; i++) {
let ingresarNombre = prompt("Ingresa el nombre completo del empleado");
    console.log(ingresarNombre+ " tu nro de empleado es " +i);
}

let nuevoEmpleado = prompt ("Ingresa el nombre del nuevo empleado - presiona S para finalizar");
while(nuevoEmpleado != "S"){
    console.log("Nombre del Empleado: "+nuevoEmpleado)
    nuevoEmpleado = prompt ("Ingresa el nombre del nuevo empleado - presiona S para finalizar");
}