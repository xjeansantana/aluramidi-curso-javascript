function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        console.log('Elemento não encontrado');
    }

    if (elemento != null) {
        if (elemento.localName == 'audio') {
            elemento.play();
        }
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador += 1) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        //verifica se foi clicado espaço ou enter
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    //remove a classe quando solta a tecla
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }


}