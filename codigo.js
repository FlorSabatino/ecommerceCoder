
for (let i=1; i<=3; i++){
    let usuario=prompt("Ingresa tu nombre de usuario");
    let contrasenia=prompt("Ingresa tu contraseña");
    if((usuario=="Florencia")&&(contrasenia=="12345")){
        alert("Bienvenida Florencia");
        break;
    }
    alert("Usuario y/o contraseña erroneos!")
}
const listaProductos=["Polera manga princesa Verde militar","Sweater Rayado negro y rojo","Sweater Rayado natural y camel","Sweater manga globo Gris"]
let cantidad=listaProductos.length;
console.log ("Tenes "+cantidad+" productos en tu carrito")
for (let i=0;i<cantidad;i++){
    console.log(listaProductos);
}

listaProductos.splice (3);
console.log (listaProductos);

listaProductos.push("Sweater con volados manteca");
console.log(listaProductos);

const carritoCompras=[
        {
            producto: "Polera manga princesa Verde militar",
            precio:1400 
    },
    {
            producto: "Sweater Rayado negro y rojo",
            precio:1500
    },
    {
            producto: "Sweater Rayado natural y camel",
            precio:1500
    },
    {
            producto: "Sweater manga globo Gris",
            precio:2000
    },
    {
            producto: "Sweater con volados manteca",
            precio:1400
    },
];
for(const producto of carritoCompras){
    console.log(producto.producto+" $"+producto.precio);
}

let buscar=carritoCompras.find((productos)=>productos.producto="Sweater verde");
console.log(buscar);
if(buscar==undefined){
    console.log("No se encontraron productos con ese nombre");
}


function suma(valor1, valor2, valor3) {
    return valor1 + valor2 + valor3;
}

let resultado = suma ((parseFloat(prompt("Ingrese importe articulo 1 "))), (parseFloat(prompt("Ingrese importe articulo 2"))), (parseFloat(prompt("Ingrese importe de articulo 3"))));

let codigoDescuento = confirm("¿Tenes un codigo de descuento?");

if (codigoDescuento){
    console.log("Tenes 10% de descuento en el total de la compra!");
    console.log("El total de tu compra con el codigo de descuento es: $", resultado*0.9);
}else{
    console.log("Sin descuento, el total de tu compra es: $", resultado);
}

let precioConDescuento=resultado*0.9


let finalPago = prompt("¿Abonas con tarjeta de credito en cuotas? Tenes 3 o 6 sin interes");

if(finalPago == 3){
    console.log("Son 3 cuotas de: $", precioConDescuento/3);
}else if(finalPago  == 6){
    console.log("Son 6 cuotas de: $", precioConDescuento/6);
}else{
    console.log("Un solo pago de: $", precioConDescuento);
}

function despedirse(){
    let usuario=confirm("Gracias por tu compra!");
}
despedirse();

console.dir(document.body);
let seccionArriba = document.getElementById("seccionLogo");
console.log(seccionArriba.innerHTML);
seccionArriba.style.background="darkgrey";
seccionArriba.innerText="Mi Tienda Lomas";
seccionArriba.style.font="bold 40px arial";

const productos=[{ id: 1, nombre: "Sweater Rayado natural y camel", precio: 1500},
                {id: 2, nombre: "Sweater con volados manteca", precio: 1400},
                {id: 3, nombre: "Polera manga princesa Verde", precio: 1400},
                {id: 4, nombre: "Sweater hilo varios colores", precio: 1300},
                {id: 5, nombre: "Sweater manga globo Gris", precio: 2000}];

let tabla=document.createElement("table");
tabla.className="table table-Overview";
let tablaFin=document.createElement("tbody");

for(const producto of productos){
    let fila=document.createElement("tr");
    fila.innerHTML=`
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>$ ${producto.precio}</td>`;
                tablaFin.append(fila);

}

tabla.append(tablaFin);
let contenedorTablita=document.getElementById("tablitaDePrueba");
contenedorTablita.append(tabla);

let campoNombre=document.getElementById("nombre")
let campoApellido=document.getElementById("apellido")


campoNombre.oninput=()=>{
    if(!isNaN(campoNombre.value)){
        campoNombre.style.color="red";
    }else{
        campoNombre.style.color="black";
    }
}
campoApellido.oninput=()=>{
    if(!isNaN(campoApellido.value)){
        campoApellido.style.color="red";
    }else{
        campoApellido.style.color="black";
    }
}
