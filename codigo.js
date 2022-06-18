
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


const cards = document.getElementById("cards")
const templateCard =document.getElementById("template-card").content
const items = document.getElementById("items")
const footer = document.getElementById("footer")
const templateFooter = document.getElementById ("template-footer").content
const templateCarrito =document.getElementById ("template-carrito").content
const fragment = document.createDocumentFragment ()

let carrito = {}

document.addEventListener("DOMContentLoaded", () => {
    fetchData ()
    if(localStorage.getItem("historial")){
        carrito = JSON.parse (localStorage.getItem("historial"))
        pintarCarrito ()
    }
})

cards.addEventListener("click", e => {
    addCarrito(e)
})
items.addEventListener ("click", e =>{
    btnAccion(e)
})
const fetchData =async () => {
    try {
        const res = await fetch("paginas/api.json")
        const data = await res.json()
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}

const pintarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector("h5").textContent = producto.nombre
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector("img").setAttribute("src", producto.foto)
        templateCard.querySelector(".btn-dark").dataset.id = producto.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
})
cards.appendChild(fragment)
}

const addCarrito = e => {
    if (e.target.classList.contains("btn-dark")){
        
        setCarrito (e.target.parentElement)
    }
    e.stopPropagation()
}
const setCarrito = objeto => {
    const producto ={
        id: objeto.querySelector(".btn-dark").dataset.id,
        nombre: objeto.querySelector("h5").textContent,
        precio: objeto.querySelector("p").textContent,
        cantidad: 1
    }
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1
    }
    carrito [producto.id] = {...producto}
    pintarCarrito()
}
const pintarCarrito = () => {
    items.innerHTML = ""

    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector("th").textContent =producto.id
        templateCarrito.querySelectorAll("td")[0].textContent = producto.nombre
        templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad
        templateCarrito.querySelector(".btn-secondary").dataset.id = producto.id
        templateCarrito.querySelector(".btn-danger").dataset.id = producto.id
        templateCarrito.querySelector("span").textContent = producto.cantidad * producto.precio
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter () 

    localStorage.setItem("historial", JSON.stringify(carrito))
}
    
    const pintarFooter = () => {
        footer.innerHTML = ""
        if (Object.keys(carrito).length === 0) {
            footer.innerHTML = '<th scope="row" colspan="5">Carrito vacío!</th>'

            return

        }
        const nCantidad = Object.values (carrito).reduce((acc, {cantidad}) => acc + cantidad,0)
       const nPrecio = Object.values (carrito).reduce((acc,{cantidad, precio}) => acc + cantidad * precio, 0)
        console.log(nPrecio)

        templateFooter.querySelectorAll("td")[0].textContent = nCantidad
        templateFooter.querySelector("span").textContent = nPrecio
        const clone = templateFooter.cloneNode(true)
        fragment.appendChild(clone)
        footer.appendChild(fragment)

        const btnVaciar = document.getElementById("vaciar-carrito")
        btnVaciar.addEventListener("click", () => {
            carrito = {}
            pintarCarrito()
        })

    }
const btnAccion = e=> {
    console.log(e.target)
    if (e.target.classList.contains("btn-secondary")){
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto}
        pintarCarrito()
    }
    if (e.target.classList.contains("btn-danger")){
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        pintarCarrito()
    }
    e.stopPropagation()
}