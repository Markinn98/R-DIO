function tocasomAplausos(){
    document.querySelector("#som_tecla_aplausos").play();
}
const ListaDeTeclas = document.querySelectorAll(".tecla");
ListaDeTeclas[0].onclick = tocasomAplausos;

let contador = 0;

while (contador<9){
    ListaDeTeclas[contador].onclick=tocasomAplausos;
    contador=contador+1;
    console.log(contador);
}

