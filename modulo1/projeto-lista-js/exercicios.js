// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
  const altura = +prompt("Digite altura:");
  const largura = +prompt("Digite a largura:");
  console.log(altura*largura);
  }

// EXERCÍCIO 02
function imprimeIdade() {
const anoAtual = +prompt("Digite o ano atual:");
const anoNasci = +prompt("Digite seu ano de nascimento:");
console.log(anoAtual-anoNasci);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
const imc = peso/(altura*altura);
return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
const nome = prompt("Informe seu nome:");
const idade = prompt("Informe sua idade:");
const email = prompt("Informe seu e-mail:");
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
const primeiraCor = prompt("Digite sua primera cor favorita:");
const segundaCor = prompt("Digite sua segunda cor favorita:");
const terceiraCor = prompt("Digite sua terceira cor favorita:");
const coresFav = [primeiraCor, segundaCor, terceiraCor];
console.log(coresFav);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const quantosIng = custo/valorIngresso;
  return quantosIng;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const checaString = string1.length===string2.length;
  return checaString;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const tamanhoArray = array.length-1;
  return array[tamanhoArray];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const ultimoItem = array[array.length-1];
  const primeiroItem = array[0];
  array[array.length-1] = primeiroItem;
  array[0] = ultimoItem;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const checaIgual = string1.toLowerCase()===string2.toLowerCase();
  return checaIgual;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = +prompt("Diga o ano atual:");
  const anoNascimento = +prompt("Diga o ano em que nasceu:");
  const anoIdentidade = +prompt("Diga o ano que sua carteira de identidade foi emitida:");

  const menosVinte = anoAtual-anoNascimento<=20 && anoAtual-anoIdentidade>=5;
  const vinteEcinquenta = anoAtual-anoNascimento>20 && anoAtual-anoNascimento<=50 && anoAtual-anoIdentidade>=10;
  const acimaCinquenta = anoAtual-anoNascimento>50 && anoAtual-anoIdentidade>=15;

  console.log(menosVinte||vinteEcinquenta||acimaCinquenta);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
 const multQuatrocentos = (ano%400==0);
 const multQuatro = (ano%4==0);
 const multCem = (ano%100==0);

 return multQuatro&&multQuatrocentos==multCem;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Responda com SIM ou NÃO: Você tem mais de 18 anos?");
  const ensino = prompt("Responda com SIM ou NÃO: Possui ensino médio completo?");
  const disponib = prompt("Responda com SIM ou NÃO: possui disponibilidade?");

  const resposta = idade=="sim" && ensino=="sim" && disponib=="sim";

  console.log(resposta);
}