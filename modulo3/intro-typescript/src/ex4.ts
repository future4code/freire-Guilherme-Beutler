const num1:number = Number(process.argv[2])
const num2:number = Number(process.argv[3])

let maiorNumero;
let menorNumero;

const comparaNumbers = (num1:number, num2:number) => {
    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2
    } else {
        maiorNumero = num2;
        menorNumero = num1
    }

    const diferenca =  maiorNumero - menorNumero;

    return diferenca
}
console.log(comparaNumbers(4,2))
