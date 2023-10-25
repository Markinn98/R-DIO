function tocasomAplausos(){
    document.querySelector("idElementoAudio").play();
}
const ListaDeTeclas = document.querySelectorAll(".tecla");
ListaDeTeclas[0].onclick = tocasomAplausos;

let contador = 0;

while (contador<ListaDeTeclas.length){
    ListaDeTeclas[contador].onclick=tocasomAplausos;
    contador=contador+1;
    console.log(contador);
}

