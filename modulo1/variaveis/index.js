//Exercícios de interpretação de código//

/* 1º 
let a = 10
let b = 10
console.log(b)
RESPOSTA: 10

b = 5
console.log(a, b)
RESPOSTA: 10 5
*/

/* 2º
let a = 10
let b = 20
c = a
b = c
a = b
console.log(a, b, c)
RESPOSTA: 10 10 10
*/


/* 3º
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

RESPOSTA:
let horasPorDia = prompt("Quantas horas você trabalha por dia?")
let recebePorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horasPorDia/recebePorDia} por hora`)
*/

//Exercícios de escrita de código//

//1º exercício//

/*
let  name
let age
console.log(typeof name);
console.log(typeof age);
*/ 
//Imprimiu o tipo UNDEFINED, pois falta os valores nas variáveis.//

/*
let name = prompt("Qual é o seu nome?");
let age = prompt("Qual a sua idade?");
console.log(typeof name);
console.log(typeof age);
Imprimiu o tipo STRING, pois o que retorna do prompt é considerado escrita.
console.log ("Olá", name, "você tem", age, "anos.");
*/


//2º exercício//
/*
let colorTshirt = prompt("Você está usando camiseta laranja agora?")
let shoe = prompt("Você está de chinelo?")
let device = prompt("Você está respondendo pelo celular?")
console.log("Você está usando camiseta laranja agora?", colorTshirt);
console.log("Você está de chinelo?", shoe);
console.log("Você está respondendo pelo celular?", device);
*/

//3º exercício//

let apple = 10
let orange = 25
let pineapple = 10
apple = orange
orange = pineapple
console.log("O novo valor de apple é", apple);
console.log("O novo valor de orange é", orange);