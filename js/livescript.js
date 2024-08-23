// let visible=document.getElementById("showbento")
// visible.style.display="none"
const mostrarbento = document.getElementById("mostrarbento")

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

