
function movimentaCarro() {
    for (let i = 0; i < imagemCarros.length; i = i + 1){
      xCarros[i] -= velocidadeCarros[i];
    }
  }
  
  
  function setup() {
    createCanvas(500, 400);
   somDaTrilha.loop();
  }
  

  function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    voltaPosicaoInicialDoCarro();
    verificaColisao();
    incluiPontos();
    marcaPonto();
  }
  
  
  
  