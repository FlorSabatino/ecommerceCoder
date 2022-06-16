let campoNombre=document.getElementById("nombre")
let campoApellido=document.getElementById("apellido")
let campoConsulta=document.getElementById("flexCheckIndeterminate")

campoNombre.onkeydown=()=>{console.log("Presionaste una tecla")}
campoNombre.onkeyup=()=>{console.log("Soltaste una tecla")}

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

campoConsulta.addEventListener("submit",validarFormulario);

function validarFormulario(ev){
    if(campoConsulta.value==""){
        ev.preventDefault();
        alert("Ingrese los datos correctos");
        campoNombre.focus();
    }
}
