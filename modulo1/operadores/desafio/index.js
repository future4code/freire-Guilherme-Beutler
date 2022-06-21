// DESAFIO //

//1
/*
var grausC = 80;
var grausF = 77;


// a) CONVERTER 77º FAHRENHEIT EM KELVIN
//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

kelvin1 = (grausF - 32)*(5/9) + 273.15;
console.log(kelvin1);

// b) CONVERTER 80º CELSIIUS EM FAHRENHEIT

grausFahrenheit = (grausC)*(9/5) + 32;
console.log(grausFahrenheit);

// c) CONVERTER 30º CELSIUS EM FAHRENHEIT DEPOIS EM KELVIN

var grausC = 30;

grausFahrenheit = (grausC)*(9/5) + 32;
console.log(grausFahrenheit);

kelvin2 = (grausFahrenheit - 32)*(5/9) + 273.15;
console.log(kelvin2);

// d)

let grausCelsius = Number(prompt("Informe os Graus Cº celsius que deseja converter."));
let conversao = prompt("Informe F para Fahrenheit ou K para Kelvin.");
let result;
let fahrenheit = grausCelsius * (9/5) + 32;
let kelvin = fahrenheit - 32 * (5/9) + 273.15;

if(conversao === "F") {
    result = "Seu resultado em F é: " + fahrenheit;
} else if (conversao === "K"){
    result = "Seu resultado em K é: " + kelvin;
} else {
    result = 'erro';
}

console.log(result);
*/

// 2 
/*
let quilowattHoraValor = 0.05;
let consumo = prompt("Informe o comsumo da sua unidade.");
let desconto = prompt("Informe a porcentagem de desconto.");
let result1 = consumo*quilowattHoraValor;
let result2 = result1*desconto/100;
console.log("Total de consumo: R$" + result1);
console.log("Total de desconto: R$" + result2);
console.log("Total a pagar: R$", result1-result2);
*/

// 3
// unidades de medida //

// a)
/*
let libra = Number(prompt("Informe quantas LIBRAS(lb) quer converter para Kg"));
let convLibKg = libra/2.205;
console.log(libra + " lb equivalem a " + convLibKg.toFixed(5) + " Kg");
*/

// b)
/*
let onca = Number(prompt("Informe quantas ONÇAS(oz) quer converter para Kg"));
let convOzKg = onca/35.274;
console.log(onca + " Oz equivalem a " + convOzKg.toFixed(5) + " Kg");
*/

// c)
/*
let milha = Number(prompt("Informe quantas MILHAS(mi) quer converter para METRO(m)"));
let convMiMe = milha*1609;
console.log(milha + " mi equivalem a " + convMiMe.toFixed(2) + " m");
*/

// d)
/*
let pes = Number(prompt("Informe quantos PÉS(ft) quer converter para METRO(m)"));
let convPeMe = pes/3.281;
console.log(pes + " ft equivalem a " + convPeMe.toFixed(3) + " m");
*/

// e)
/*
let galao = Number(prompt("Informe quantos GALÕES(gal) quer converter para LITRO(l)"));
let convGalLit = galao*3.785;
console.log(galao + " gal equivalem a " + convGalLit.toFixed(3) + " l");
*/

// f)
/*
let xicara = Number(prompt("Informe quantas XICARAS(xic) quer converter para LITRO(l)"));
let convXicLit = xicara/3.52;
console.log(xicara + " xic equivalem a " + convXicLit.toFixed(3) + " l");
*/
