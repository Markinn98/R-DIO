function tocasomAplausos(){
    document.querySelector("#som_tecla_Aplausos").play();
}
const ListaDeTeclas = document.querySelectorAll(".tecla");
ListaDeTeclas[0].onclick = tocasomAplausos;
