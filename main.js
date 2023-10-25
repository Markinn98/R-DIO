function tocasomAplausos(){
    document.querySelector("#som_tecla_aplausos").play();
}
const ListaDeTeclas = document.querySelectorAll(".tecla");
ListaDeTeclas[0].onclick = tocasomAplausos;
