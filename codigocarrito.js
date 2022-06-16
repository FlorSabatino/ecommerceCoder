

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


// const productos=[{id: 1, nombre: "Sweater Rayado natural y camel", precio: 1500, cantidad: 1},
//                 {id: 2, nombre: "Sweater con volados manteca", precio: 1400, cantidad: 1},
//                 {id: 3, nombre: "Polera manga princesa Verde", precio: 1400, cantidad: 1},
//                 {id: 4, nombre: "Sweater hilo varios colores", precio: 1300, cantidad: 1},
//                 {id: 5, nombre: "Sweater manga globo Gris", precio: 2000, cantidad: 1},
//             {id: "", nombre: "Total de la compra", precio: 7600, cantidad: ""} ];



let tabla=document.createElement("table");
tabla.className="table table-overwiew";
let tablaFin=document.createElement("tbody");


// for(const producto of productos){
//     let fila=document.createElement("tr");
//     fila.innerHTML=`
//                 <td>${producto.id}</td>
//                 <td>${producto.nombre}</td>
//                 <td>$ ${producto.precio}</td>
//                 <td> ${producto.cantidad}</td>`;
//                 tablaFin.append(fila);

// }

tabla.append(tablaFin);
let contenedorTablita=document.getElementById("tablitaDePrueba");
contenedorTablita.append(tabla);


const guardarStorage = (clave, valor) => {localStorage.setItem(clave, valor) };

// guardarStorage("listaproductos",JSON.stringify(productos));

class Producto{
    constructor (obj) {
    this.nombre = obj.producto.toUpperCase();
    this.precio = parseFloat(obj.precio);
    }
    sumaIva(){
    this.precio = this.precio * 1.21;
    }
}
    const listadoProd = JSON.parse(localStorage.getItem("listaProductos"));
    console.log(listadoProd);

    localStorage.setItem("productos",JSON.stringify("listaProductos"));
    const listaPrecios=JSON.parse(localStorage.getItem("listaProductos"));
    console.log(listaPrecios);