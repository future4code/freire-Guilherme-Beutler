// Exercícios de interpretação de código //

// 1)
// a. 10, 50
// b. iria executar a operação de multiplicação, porém não seria printado no console.

// 2)
// a. Uma nova string contendo o valor da string original convertido para minúsculo e procurar a palavra "cenoura".
// b.
// I. TRUE
// II. TRUE
// III. FALSE


// Exercícios de escrita de código //

// 1)
//a.
/*
function informacoes(){
     const nome = "Guilherme Beutler"
     const idade = "29 anos"
     const cidade = "Carazinho/RS"
     const estudante = "sou estudante."
     function imprimeFrase(){
     console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade}, e ${estudante}`)
         }
    imprimeFrase()
 }
const frase = informacoes();
*/

//b.
/*
function dadosUsuario(){
    name = prompt("Qual seu nome?")
    age = prompt("Qual sua idade?")
    adress = prompt("Onde você mora?")
    profession = prompt("Qual sua profissão?")
    function impress(){
        console.log(`Eu sou ${name}, tenho ${age} anos, moro em ${adress}, e sou ${profession}.`)
    }
    impress()
}
const impressao = dadosUsuario()
*/

// 2)
//a.
/*
num1 = Number(prompt("Informe um número:"));
num2 = Number(prompt("Informe um segundo número:"));
function somarDoisNumeros(num1, num2){
    const soma = num1+num2
    return soma
}
console.log(somarDoisNumeros(num1, num2));
*/

//b.
/*
num1 = Number(prompt("Informe um número:"));
num2 = Number(prompt("Informe um segundo número:"));
function maior(num1, num2){
    const maiorOuIgual = num1>=num2
    return maiorOuIgual
}
console.log(maior(num1, num2));
*/

//c.
/*
num1 = Number(prompt("Informe um número:"));
function numeroPar(num1){
    const validarNumPar = num1%2===0;
    return validarNumPar;
}
console.log(numeroPar(num1));
*/

//d.
/*
frase = prompt("Digite uma frase:");
function fraseDoPrompt(frase){
    const maiusculo = frase.toUpperCase();
    const tamanho = frase.length;
    const retorno = `Tamanho da frase: ${maiusculo}, é ${tamanho}.`
    return retorno;
}
console.log(fraseDoPrompt(frase));
*/

// 3)
/*
impt1 = Number(prompt("Digite um número"));
impt2 = Number(prompt("Digite mais um número"));
function operacoesBasicas(impt1, impt2){
    let soma = impt1+impt2;
    let dif = impt1-impt2;
    let mult = impt1*impt2;
    let div = impt1/impt2;
    const retorno = `Números inseridos: ${impt1} e ${impt2}\n`
    +`Soma: ${soma}\n`
    +`Diferença: ${dif}\n`
    +`Multiplicação: ${mult}\n`
    +`Divisão: ${div}`
    return retorno;
}
console.log(operacoesBasicas(impt1, impt2));
*/

// DESAFIOS //

// 1)
/*
const imprimeLog = valor => {
    console.log(valor);
}

const somarDoisNumeros=(num1, num2)=>{
     const soma = num1+num2
    imprimeLog(soma)
}
num1 = Number(prompt("Digite um número"));
num2 = Number(prompt("Digite mais um número"));
somarDoisNumeros(num1, num2);
*/

// 2)
/*
a = Number(prompt("Digite um número"));
b = Number(prompt("Digite mais um número"));
function teorema(a, b){
    let soma = a**2 + b**2;
    let hipotenusa = Math.sqrt(soma);
    return hipotenusa;
}
console.log(teorema(a, b));
*/