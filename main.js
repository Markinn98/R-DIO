function tocasomgrilo(){
    document.querySelector("#som_tecla_grilo").play();
}
const ListaDeTeclas = document.querySelectorAll(".tecla");
ListaDeTeclas[0].onclick = tocasomgrilo;
