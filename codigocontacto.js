let campoNombre=document.getElementById("nombre")
let campoApellido=document.getElementById("apellido")
let campoConsulta=document.getElementById("flexCheckIndeterminate")

//si ingreso numeros en vez de letras, se pone rojo
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
//funcion para tomar datos desde el formulario

function captura () {
    const nombreUsuario=document.getElementById("nombre").value;
    const apellidoUsuario=document.getElementById("apellido").value;
    const mailUsuario=document.getElementById("floatingInputValue").value;
    const textoLibre=document.getElementById("textoLibre").value;

    if (nombreUsuario==""){
        console.log ("El nombre no puede quedar vacio")
    }else{
        if (apellidoUsuario==""){
            console.log ("El apellido no puede quedar vacio")
        }else{
        if (mailUsuario==""){
            console.log ("El mail es obligatorio")
        }
    }  
    }
    console.log (nombreUsuario +" "+apellidoUsuario+" "+mailUsuario+" "+textoLibre)

}

