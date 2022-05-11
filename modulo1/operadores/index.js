//Exercícios de interpretação de código//

/*
1º:
a) resultado = false
b) resultado = false
c) resultado = true
d) resultado = boolean

2º:
Tudo que vem do prompt é considerado string, por isso na soma o sinal de +
concatena os dois textos, trazendo a informação errada no console.log.

3º
Solução: adicionar os codigos para converter string para número. Ex.:
primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)
*/

//Exercícios de escrita de código//

//1º exercício//

let userAge = prompt("Qual a sua idade?");
let ageFriend = prompt("Qual a idade do seu melhor amigo?");
userAge = Number(userAge);
ageFriend = Number(ageFriend);
console.log("Sua idade é maior do que a do seu amigo? ",userAge>=ageFriend);
console.log("Qual a diferença de idade? ", userAge-ageFriend);

//2º exercício//

let numeroPar = prompt("Favor informar um número PAR");
numeroPar = Number(numeroPar);
console.log("Resto da divisão: ", numeroPar % 2);

// Testando números pares o resultado do resto sempre foi 0.
// Testanto números ímpares o resultado apresentava os valores para o resto.

//3º exercício//

let idadeUsuario = prompt("Qual sua idade em anos?");
idadeUsuario = Number(idadeUsuario);
mesesAno = 12
diasAno = 365
horasAno = 8760
console.log ("Idade em meses: ", idadeUsuario * mesesAno);
console.log ("Idade em dias: ", idadeUsuario * diasAno);
console.log ("Idade em horas: ", idadeUsuario * horasAno);

//4º exercício//

let primeiroNum = prompt("Forneça um número!");
let segundoNum = prompt("informe mais um número!");
primeiroNum = Number(primeiroNum);
segundoNum = Number(segundoNum);
resultado1 = (primeiroNum>segundoNum);
resultado2 = (primeiroNum===segundoNum);
resultado3 = (primeiroNum/segundoNum);
resultado4 = (segundoNum/primeiroNum);
div1 = (resultado3%2===0||resultado3%3===0);
div2 = (resultado4%2===0||resultado4%3===0);
console.log("O primeiro número é maior que o segundo? ", resultado1);
console.log("O primeiro número é igual ao segundo? ", resultado2);
console.log("O primeiro número é divisível pelo segundo? ", div1);
console.log("O segundo número é divisível pelo primeiro? ", div2);
