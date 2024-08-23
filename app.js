//Función que modifica texto
function actualizarResultado(texto){
    let contenidoDefault = document.querySelector('.contenidoDefault');
    let resultado = document.querySelector('.textResultado');
    let contenidoModificado = document.querySelector('.contenidoModificado');
    let alerta = document.querySelector('.copiarstyle');
    alerta.innerHTML = "Copiar"; //Para regresar al texto si es que se ha copiado anteriormente
    
    //Sin texto se mantiene pantalla inicial
    if(texto != ""){
        resultado.innerHTML = texto;
        contenidoDefault.style.display = "none";
        contenidoModificado.style.display = "block";
    }
    else{
        contenidoDefault.style.display = "block";
        contenidoModificado.style.display = "none";
    }
}
//Función encripta texto
function encriptar(){
    let texto = document.getElementById('inputTexto').value;
    let textomodificado = "";
    //Barrido de texto
    for (let i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textomodificado += "ai";
        }
        else if(texto[i] == "e"){
            textomodificado += "enter"
        }
        else if(texto[i] == "i"){
            textomodificado += "imes"
        }
        else if(texto[i] == "o"){
            textomodificado += "ober"
        }
        else if(texto[i] == "u"){
            textomodificado += "ufat"
        }
        else{
            textomodificado += texto[i];
        }
    }
    actualizarResultado(textomodificado);
    return;
}

function desencriptar(){
    let texto = document.getElementById('inputTexto').value;
    let textomodificado = texto;
    //Cambia encriptación por palabra original
    textomodificado = textomodificado.replace(/ai/g, "a");
    textomodificado = textomodificado.replace(/enter/g, "e");
    textomodificado = textomodificado.replace(/imes/g, "i");
    textomodificado = textomodificado.replace(/ober/g, "o");
    textomodificado = textomodificado.replace(/ufat/g, "u");
    actualizarResultado(textomodificado);
    return;
}

function copytext(){
    let texto = document.getElementById('outputTexto');
    navigator.clipboard.writeText(texto.innerHTML);
    let alerta = document.querySelector('.copiarstyle');
    alerta.innerHTML = "Texto copiado!";
}