
for (let i=1; i<=3; i++){
    let usuario=prompt("Ingresa tu nombre de usuario");
    let contrasenia=prompt("Ingresa tu contraseña");
    if((usuario=="Florencia")&&(contrasenia=="12345")){
        alert("Bienvenida Florencia");
        break;
    }
    alert("Usuario y/o contraseña erroneos!")
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