// ---------------------- Exercícios de interpretação de código ------------------//

// 1) O código está somando a variável "valor" ao resultado de "i" enquanto ele for menor que 5. console = 10.
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
//

// 2) 
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// a. Vai imprimir os valores maiores de 18. [19, 21, 23, 25, 27, 30].
// b. 

// 3) *, **, ***, ****.
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// ---------------------- Exercícios de escrita de código ---------------------//

// 1)
/*
let pet = Number(prompt("Quantos animais de estimação você possui?"));
let nomePets = [];

function petsUsuario() {
    if (pet>0) {
        for (i=1; i<=pet; i++){
            nomePets.push(prompt("qual o nome?"));
        }           
    } else if (pet<=0){
        console.log("Que pena! Você pode adotar um pet!");
    }
    console.log(nomePets);
}
petsUsuario();
*/

// 2)

/*
let arrayOriginal = [12, 15, 19, 21, 22, 36, 37, 40, 42, 45];
let arrayPares = [];

// a.
console.log("Resposta a. valores do array original");
for (i=0; i<arrayOriginal.length; i++){
    console.log(arrayOriginal[i]);
}

// b.
console.log("Resposta b. divisão por 10");
for (i=0; i<arrayOriginal.length; i++){
    console.log(arrayOriginal[i]/10);
}

// c.
let cont = 0;
console.log("Resposta c. array números pares");
for (i=0; i<arrayOriginal.length; i++){
    if ((arrayOriginal[i]%2)==0){
        arrayPares[cont] = arrayOriginal[i];
        cont++;
    }
}
console.log(arrayPares);

// d.
console.log("Resposta d. array strings");
for (i=0; i<arrayOriginal.length; i++){
    console.log(`O elemento do índex ${[i]} é ${arrayOriginal[i]}`);
}

// e.
console.log("Resposta e. ");
let valorMaximo = Math.max.apply(null, arrayOriginal);
let valorMinimo = Math.min.apply(null, arrayOriginal);
console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`);
*/

// ---------------------------- DESAFIOS -----------------------------//

// 1) 

// const max = 1;
// const min = 50;

// let secretNumber = Math.floor(Math.random()*(max - min + 1)) + min;

// let guesses = 0;
// let hint = '';
// let number = 0;

// do{
//     let userNumber = Number(prompt("Tente adivinhar um número entre 1 e 50:"));
//     number = userNumber
//     guesses++;
//     if (number>secretNumber){
//         console.log('O número que informou é maior.');
//     } else if (number<secretNumber){
//         console.log(`O número que informou é menor.`);
//     } else {
//         console.log(`Parabéns, você acertou o número depois de ${guesses} tentativas.`);
//     }
// }while(number != secretNumber);