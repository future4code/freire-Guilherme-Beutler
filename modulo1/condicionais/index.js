// Exercícios de interpretação de código 

// 1)
// a. Testa se o número informado pelo usuário é par, se for ele executa o if se não executa o else.
// b. Números pares.
// c. Números ímpares.

// 2)
// a. Verifica se a fruta digitada pelo usuário está dentro de algum case, se estiver, retorna o preço.
// b. O preço da fruta Maçã, é R$ 2.25.
// c. O preço da fruta Pêra, é R$ 5.

// 3)
// a. Pedindo um número ao usário pelo prompt.
// b. 10: Esse número passou no teste. -10: não imprime mensagem pois não foi defindo else.
// c. O erro acontece pois o console.log(mensagem) está fora do escopo do if. Da para colocar
// a o console dentro do escopo ou a variavel mensagem fora para resolver o problema.


// Exercícios de escrita de código

// 1)

// const idadeUsuario = Number(prompt("Informe sua idade:"));
//     if (idadeUsuario>18){
//         console.log("Você pode dirigir!");
//     } else {
//         console.log("Você não pode dirigir!");
//     }

// 2)

// const turnoAluno = prompt("Qual turno você estuda? M: matutino, V: vespertino ou N: noturno");
//     if (turnoAluno === "M") {
//         console.log("Bom dia!")
//     } else if (turnoAluno === "V") {
//         console.log("Boa tarde!");
//     } else if(turnoAluno === "N"){
//         console.log("Boa noite!");
//     } else

// 3)

// const alunoTurno = prompt("Qual turno você estuda? M: matutino, V: vespertino ou N: noturno");
//     switch (alunoTurno) {
//         case "M":
//             console.log("Bom dia!")
//             break;
//         case "V":
//             console.log("Boa tarde!")
//             break;           
//         default:
//             console.log("Boa noite!")
//             break;
//     }

// 4)

// const verFilme = (generoFilme, valorIngresso) => {
//     if (generoFilme === "Fantasia" && valorIngresso<15) {
//     console.log("Bom filme!");
//     } else {
//       console.log("Escolha outro filme :(");
//     }
// }
// const generoFilme = prompt("Qual gênero de filme gostaria de assistir? Fantasia, Terror ou Ação?");
// const valorIngresso = Number(prompt("Qual o valor do ingresso?"));
// verFilme(generoFilme, valorIngresso);


// Desafios

// 1)

// const verFilme = (generoFilme, valorIngresso) => {
//     if (generoFilme === "Fantasia" && valorIngresso<15) {
//     console.log(`Bom filme! E aproveite seu/sua ${lanchinho}!`);
//     } else {
//       console.log("Escolha outro filme :(");
//     }
// }
// const generoFilme = prompt("Qual gênero de filme gostaria de assistir? Fantasia, Terror ou Ação?");
// const valorIngresso = Number(prompt("Qual o valor do ingresso?"));
// const lanchinho = prompt("Qual lanchinho irá comprar? Pipoca, chocolate, doces etc?")
// verFilme(generoFilme, valorIngresso);

// 2)

const nomeCompleto = prompt("Qual seu nome completo?");
const tipoJogo = prompt("Tipo do jogo: IN (internacional), DO (doméstico).");
const etapaJogo = prompt("Qual a etapa do jogo? SF (semi-final), DT (dec terc lugar), FI (final)");
const categoria = prompt("Qual a categoria? 1, 2, 3 ou 4");
const qtdIngresso = Number(prompt("Quantos ingressos precisa?"));

const semiFinais = {
    categoria1: 1320,
    categoria2: 880,
    categoria3: 550,
    categoria4: 220
}

const terceiroLugar = {
    categoria1: 660,
    categoria2: 440,
    categoria3: 330,
    categoria4: 170
}

const final = {
    categoria1: 1980,
    categoria2: 1320,
    categoria3: 880,
    categoria4: 330
}

if (tipoJogo==="DO" && etapaJogo ==="SF" && categoria==="1") {
    valorIng = qtdIngresso * semiFinais.categoria1;
} else if (tipoJogo==="DO" && etapaJogo ==="SF" && categoria==="2") {
    valorIng = qtdIngresso * semiFinais.categoria2;
} else if (tipoJogo==="DO" && etapaJogo ==="SF" && categoria==="3") {
    valorIng = qtdIngresso * semiFinais.categoria3;
} else if (tipoJogo==="DO" && etapaJogo ==="SF" && categoria==="4") {
    valorIng = qtdIngresso * semiFinais.categoria4;
} else if (tipoJogo==="DO" && etapaJogo ==="DT" && categoria==="1") {
    valorIng = qtdIngresso * terceiroLugar.categoria1;
} else if (tipoJogo==="DO" && etapaJogo ==="DT" && categoria==="2") {
    valorIng = qtdIngresso * terceiroLugar.categoria2;
} else if (tipoJogo==="DO" && etapaJogo ==="DT" && categoria==="3") {
    valorIng = qtdIngresso * terceiroLugar.categoria3;
} else if (tipoJogo==="DO" && etapaJogo ==="DT" && categoria==="4") {
    valorIng = qtdIngresso * terceiroLugar.categoria4;
} else if (tipoJogo==="DO" && etapaJogo ==="FI" && categoria==="1") {
    valorIng = qtdIngresso * final.categoria1;
} else if (tipoJogo==="DO" && etapaJogo ==="FI" && categoria==="2") {
    valorIng = qtdIngresso * final.categoria2;
} else if (tipoJogo==="DO" && etapaJogo ==="FI" && categoria==="3") {
    valorIng = qtdIngresso * final.categoria3;
} else if (tipoJogo==="DO" && etapaJogo ==="FI" && categoria==="4") {
    valorIng = qtdIngresso * final.categoria4;
} else if (tipoJogo==="IN" && etapaJogo ==="SF" && categoria==="1") {
    valorIng = qtdIngresso * semiFinais.categoria1 * 4.10;
} else if (tipoJogo==="IN" && etapaJogo ==="SF" && categoria==="2") {
    valorIng = qtdIngresso * semiFinais.categoria2 * 4.10;
} else if (tipoJogo==="IN" && etapaJogo ==="SF" && categoria==="3") {
    valorIng = qtdIngresso * semiFinais.categoria3 * 4.10;
} else if (tipoJogo==="IN" && etapaJogo ==="SF" && categoria==="4") {
    valorIng = qtdIngresso * semiFinais.categoria4 * 4.10;
} else if (tipoJogo==="IN" && etapaJogo ==="DT" && categoria==="1") {
    valorIng = qtdIngresso * terceiroLugar.categoria1 * 4.10;
} else if (tipoJogo==="IN" && etapaJogo ==="DT" && categoria==="2") {
    valorIng = qtdIngresso * terceiroLugar.categoria2 * 4.10;
} else if (tipoJogo==="IN" && etapaJogo ==="DT" && categoria==="3") {
    valorIng = qtdIngresso * terceiroLugar.categoria3 * 4.10;
} else if (tipoJogo==="IN" && etapaJogo ==="DT" && categoria==="4") {
    valorIng = qtdIngresso * terceiroLugar.categoria4 * 4.10;
} else if (tipoJogo==="IN" && etapaJogo ==="FI" && categoria==="1") {
    valorIng = qtdIngresso * final.categoria1 * 4.10;
} else if (tipoJogo==="IN" && etapaJogo ==="FI" && categoria==="2") {
    valorIng = qtdIngresso * final.categoria2 * 4.10;
} else if (tipoJogo==="IN" && etapaJogo ==="FI" && categoria==="3") {
    valorIng = qtdIngresso * final.categoria3 * 4.10;
} else if (tipoJogo==="IN" && etapaJogo ==="FI" && categoria==="4") {
    valorIng = qtdIngresso * final.categoria4 * 4.10;
}

console.log("--- Dados da compra ---");
console.log(`Nome do Cliente: ${nomeCompleto}`);
console.log(`Tipo do jogo: ${tipoJogo}`);
console.log(`Etapa do jogo: ${etapaJogo}`);
console.log(`Categoria: ${categoria}`);
console.log(`Quantidade de Ingressos: ${qtdIngresso}`);
console.log("--- Valores ---");
console.log(`Valor do ingresso: $ ${valorIng/qtdIngresso}`);
console.log(`Valor total: $ ${valorIng}`);