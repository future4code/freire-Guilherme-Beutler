//Exercícios de interpretação de código//

// 1)
//a. undefined (array não possui informações);
//b. null (array foi definida como null);
//c. 11 (length nos diz qual a quantidade de itens de uma array);
//d. 3 (como só foi informado o I, trouxe a informação da posição 0);
//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//f. 9 (trouxe a informação da posição 6);

// 2) SUBI NUM ÔNIBUS EM MIRROCOS 27

// Exercícios de escrita de código //

// 1)
/*
let emailDoUsuario = prompt("Informe seu E-mail!");
let nomeDoUsuario = prompt("Qual o seu Nome?");
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a) ${nomeDoUsuario}!`);
*/

// 2)
/*
let listaComidas = ["churrasco", "pizza", "macarronada", "risoto", "sorvete"];
console.log("Estas são minhas comidas preferidas:");
console.log(listaComidas[0]);
console.log(listaComidas[1]);
console.log(listaComidas[2]);
console.log(listaComidas[3]);
console.log(listaComidas[4]);
let comidaUsuario = prompt("Qual sua comida favorita?");
listaComidas.splice(1, 1, comidaUsuario);
console.log("Nova lista de comidas:");
console.log(listaComidas[0]);
console.log(listaComidas[1]);
console.log(listaComidas[2]);
console.log(listaComidas[3]);
console.log(listaComidas[4]);
*/

// 3)
/*
let listaDeTarefas = [];
let primeiraTarefa = prompt("Informe a primeira tarefa que precisa realizar!");
let segundaTarefa = prompt("Informe a segunda tarefa que precisa realizar!");
let terceiraTarefa = prompt("Informe a terceira tarefa que precisa realizar!");
listaDeTarefas.splice(0, 0, primeiraTarefa, segundaTarefa, terceiraTarefa);
console.log(listaDeTarefas);
let tarefaRealizada = prompt("Digite o índice da tarefa já realizada (0,1,2)");
listaDeTarefas.splice(tarefaRealizada, 1);
console.log(listaDeTarefas);
*/

// DESAFIOS //

// 1)
/*
let frase = prompt("Escreva uma frase.");
console.log(frase);
let arrayFrase = frase.split(" ");
console.log(arrayFrase);
*/

// 2)
/*
let frutas = ["banana", "morango", "abacaxi", "laranja", "ameixa"];
let frutaUsuario = prompt("Escreva a fruta que deseja buscar:");
console.log(`O indice dentro do array é: ${frutas.indexOf(frutaUsuario)} e o tamanho da array é: ${frutas.length}`);
*/
