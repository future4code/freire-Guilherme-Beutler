console.log("Bem-vindo ao Blackjack");

let jogar = confirm("Quer iniciar uma nova rodada?");

if (jogar) {
   let primeiraCartaJogador = comprarCarta();
   let segundaCartaJogador = comprarCarta();
   let primeiraCartaPc = comprarCarta();
   let segundaCartaPc = comprarCarta();

   let totalPontosJogador = primeiraCartaJogador.valor + segundaCartaJogador.valor;
   let totalPontosPc = primeiraCartaPc.valor + segundaCartaPc.valor

   console.log(`Usuário - cartas: ${primeiraCartaJogador.texto} ${segundaCartaJogador.texto} - pontuação: ${totalPontosJogador}`);
   console.log(`Computador - cartas: ${primeiraCartaPc.texto} ${segundaCartaPc.texto} - pontuação: ${totalPontosPc}`);

   if (totalPontosJogador > totalPontosPc) {
      console.log("Parabéns, você ganhou!");
   } else if (totalPontosJogador === totalPontosPc) {
      console.log("Deu empate, ninguém ganhou!");
   } else {
      console.log("Que pena, o computador ganhou!");
   }

} else {
   console.log("Acabou o jogo!");
}
