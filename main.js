function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const ListaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

while (contador<ListaDeTeclas.length){
    const tecla = ListaDeTeclas [contador];
    const efeito = tecla.classList[1]
    const idAudio = `#som_${efeito}`;
    tecla.onclick = function () {
    tocaSom(idAudio);
    }
    contador=contador+1;
}

