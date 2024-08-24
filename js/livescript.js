const mostrarbento = document.getElementById("mostrarbento")
const txtm=document.getElementById("txtm")
txtm.style.display="none"

mostrarbento.addEventListener("click", function() {
    document.getElementById("showbento").style.display="block";

});


function cerrarbento() {
    document.getElementById("showbento").style.display="none";
    }
document.getElementById("closebento").onclick = cerrarbento;

function norecharge(){
    let inputnombre=document.getElementById("inputnombre");
    inputnombre.value="";
    let inputemail=document.getElementById("inputemail");
    inputemail.value="";
    let inputmensaje=document.getElementById("inputmensaje");
    inputmensaje.value="";
}
function esoestodo(){
    if (document.getElementById("txtm").style.display==="none"){
        document.getElementById("txtm").style.display="block";
    }else{
        document.getElementById("txtm").style.display="none";
    }
}

document.getElementById("imgm").onclick=esoestodo;