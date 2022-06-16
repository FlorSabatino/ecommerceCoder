
//for (let i=1; i<=3; i++){
//    let usuario=prompt("Ingresa tu nombre de usuario");
//    let contrasenia=prompt("Ingresa tu contraseña");
//    if((usuario=="Florencia")&&(contrasenia=="12345")){
//        alert("Bienvenida Florencia");
  //      break;
    //}
    //alert("Usuario y/o contraseña erroneos!")
//}

// let campoNombre=document.getElementById("nombre")
// let campoApellido=document.getElementById("apellido")


// console.dir(document.body);
// let seccionArriba = document.getElementById("seccionLogo");
// console.log(seccionArriba.innerHTML);
// seccionArriba.style.background="darkgrey";
// seccionArriba.innerText="Mi Tienda Lomas";
// seccionArriba.style.font="bold 40px arial";


// function suma(valor1, valor2, valor3) {
//     return valor1 + valor2 + valor3;
// }

// let resultado = suma ((parseFloat(prompt("Ingrese importe articulo 1 "))), (parseFloat(prompt("Ingrese importe articulo 2"))), (parseFloat(prompt("Ingrese importe de articulo 3"))));

// let codigoDescuento = confirm("¿Tenes un codigo de descuento?");

// if (codigoDescuento){
//     console.log("Tenes 10% de descuento en el total de la compra!");
//     console.log("El total de tu compra con el codigo de descuento es: $", resultado*0.9);
// }else{
//     console.log("Sin descuento, el total de tu compra es: $", resultado);
// }

// let precioConDescuento=resultado*0.9


// let finalPago = prompt("¿Abonas con tarjeta de credito en cuotas? Tenes 3 o 6 sin interes");

// if(finalPago == 3){
//     console.log("Son 3 cuotas de: $", precioConDescuento/3);
// }else if(finalPago  == 6){
//     console.log("Son 6 cuotas de: $", precioConDescuento/6);
// }else{
//     console.log("Un solo pago de: $", precioConDescuento);
// }

// function despedirse(){
//     let usuario=confirm("Gracias por tu compra!");
// }
// despedirse();


const templateCard = document.getElementById("template-card").content
const templateFooter = document.getElementById("template-footer").content
const footer = document.getElementById("footer")

let carrito=[];

const productos = [{
    id: 1,
    foto: "https://picsum.photos/id/1014/367/267",
    nombre: "Sweater Rayado natural y camel",
    precio: 1500,
    cantidad: 1
},
{
    id: 2,
    foto: "https://picsum.photos/id/1013/367/267",
    nombre: "Sweater Rayado negro y rojo",
    precio: 1500,
    cantidad: 1
},
{
    id: 3,
    foto: "https://picsum.photos/id/10/367/267",
    nombre: "Polera manga princesa Verde militar",
    precio: 1400,
    cantidad: 1
},
{
    id: 4,
    foto: "https://picsum.photos/id/103/367/267",
    nombre: "Sweater hilo varios colores",
    precio: 1300,
    cantidad: 1
},
{
    id: 5,
    foto: "https://picsum.photos/id/1035/367/267",
    nombre: "Polera manga princesa manteca",
    precio: 1400,
    cantidad: 1
},
{
    id: 6,
    foto: "https://picsum.photos/id/104/367/267",
    nombre: "Sweater con volados gris",
    precio: 1400,
    cantidad: 1
},
{
    id: 7,
    foto: "https://picsum.photos/id/1033/367/267",
    nombre: "Sweater con volados manteca",
    precio: 1400,
    cantidad: 1
}
];


if(localStorage.getItem("carrito")!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"));
}

let lista=document.getElementById("milista");

renderizarProductos();

function renderizarProductos() {
    for (const producto of productos) {
        lista.innerHTML+=`<li class="col-sm-3 list-group-item">
        <img src=${producto.foto} width="250" height="250">
        <p> Producto: ${producto.nombre}</p>
        <p><strong> $ ${producto.precio} </strong></p>
        <button class='btn btn-dark' id='btn${producto.id}'>Comprar</button>
        </li>`;
    }
    productos.forEach(producto=>{
        document.getElementById(`btn${producto.id}`).addEventListener('click',function(){
            agregarAlCarrito(producto);
        });
    });
}

function agregarAlCarrito(productoNuevo){
    carrito.push(productoNuevo);
    console.log(carrito);
    alert("Producto: "+productoNuevo.nombre+" fue agregado al carrito de compra");
    document.getElementById("tablabody").innerHTML+=`
        <tr>
            <td>${productoNuevo.nombre}</td>
            <td>${productoNuevo.cantidad}</td>
            <td>${productoNuevo.precio}</td>
        </tr>
    `;
    sessionStorage.setItem("carrito",JSON.stringify(carrito));
}
