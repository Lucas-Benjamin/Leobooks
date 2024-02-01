const botaoPlayPause = document.getElementById("play-pause");
const botaoAnterior = document.getElementById("anterior")
const botaoproximo = document.getElementById("proximo")
const audio = document.getElementById("audio-capitulo");

let quantidadeCapitulos = 10;
let tatocando = false;
let capitulo = 1;

function tocarfaixa ()
{
    audio.play()
    botaoPlayPause.classList.remove("bi-play-circle");
    botaoPlayPause.classList.add("bi-pause-circle");
    tatocando = true;
}

function pausarfaixa () 
{
    audio.pause()
    botaoPlayPause.classList.add("bi-pause-circle");
    botaoPlayPause.classList.remove("bi-play-circle");
    tatocando = false;
}

function tocarOuPausar ()
{
    if (tatocando === true)
    {
        pausarfaixa();
    } else {
        tocarfaixa();
    }
}

function botaoProximo () {

    if (capitulo < quantidadeCapitulos){
        capitulo += 1
    } else {
        capitulo = 1
    }

    capitulo += 1;
    audio.src = "./books/dom-casmurro/" + capitulo + ".mp3";
    tocarfaixa();
    console.log(capitulo)
}

function BotaoAnterior () {
  if (capitulo === 1) {
    capitulo = quantidadeCapitulos;
  } else {
    capitulo -= 1;
  }

  audio.src = "book/dom-casmurro/" + capitulo + ".mp3"
  tocarfaixa()
}
   
botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoproximo.addEventListener("click", botaoProximo);
botaoAnterior.addEventListener("click", BotaoAnterior)
