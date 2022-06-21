let cartasJogador = [];
let cartasPc = [];

if (confirm("Seja bem-vindo ao jogo Blackjack," + "\n" + "Quer iniciar uma rodada?")) {

   let checkCartas = false;

   while (!checkCartas) {
      cartasJogador.push(comprarCarta());
      cartasJogador.push(comprarCarta());
      cartasPc.push(comprarCarta());
      cartasPc.push(comprarCarta());

      if ((cartasJogador[0].valor === 11 && cartasJogador[1].valor ===11) || 
      (cartasPc[0].valor === 11 && cartasPc[1].valor === 11)) {
         cartasJogador = [];
         cartasPc = [];
      } else {
         checkCartas = true;
      }
   }

   let comprar = true;

   while (comprar) {
      let textos = "";
      let pontos = 0;
      for (let carta of cartasJogador) {
         textos += carta.texto + " ";
         pontos += carta.valor;
      }
      if (pontos > 21) {
         comprar = false;
      } else {
         let confirmarCompra = confirm(`Suas cartas são ${textos}. A carta revelada do computador é ${cartasPc[0].texto}` + 
         "\n" + "Deseja comprar mais uma carta?");
         if (confirmarCompra) {
            cartasJogador.push(comprarCarta());
         } else {
            comprar = false;
         }
      }
   }
   
   let pontosComputador = 0;
   let pontosJogador = 0;
   let textosComputador = "";
   let textosJogador = "";

   for (let carta of cartasPc) {
      pontosComputador += carta.valor;
      textosComputador += carta.texto + " ";
   }
   for (let carta of cartasJogador) {
      pontosJogador += carta.valor;
      textosJogador += carta.texto + " ";
   }

   if (pontosJogador <= 21) {
      while(pontosComputador < pontosJogador && pontosComputador <= 21) {
         cartasPc.push(comprarCarta());
         pontosComputador = 0;
         textosComputador = "";
         for (let carta of cartasPc) {
            pontosComputador += carta.valor;
            textosComputador += carta.texto + " ";
         }
      }
   }

   let resultado = "";
   if (pontosJogador > pontosComputador && pontosJogador <= 21) {
      resultado = "Parabéns, você ganhou!";
   } else if (pontosComputador > pontosJogador && pontosComputador <= 21) {
      resultado = "Que pena, o computador ganhou!"
   } else if (pontosComputador > 21 && pontosComputador <= 21) {
      resultado = "Parabéns, você ganhou!";
   } else if (pontosJogador > 21 && pontosComputador <= 21) {
      resultado = "Que pena, o computador ganhou!";
   } else {
      resultado = "Ninguém ganhou, deu empate!";
   }

   alert(
      `Usuário - cartas: ${textosJogador} - pontuação: ${pontosJogador}` +
      "\n" +
      `Computador - cartas: ${textosComputador} - pontuação: ${pontosComputador}` +
      "\n" +
      resultado   
   )
} else {
   alert("O jogo acabou!");
}

