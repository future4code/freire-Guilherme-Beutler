/*  --> Exercício 1 <--
A)
O módulo args é muito popular para lidar com argumentos de linha.
Ele fornece vários recursos, como adicionar nosso próprio comando
para funcionar.
*/

let red, blue, reset;
red = '\u001b[31m';
blue = '\u001b[34m';
reset = '\u001b[0m';

// B)

console.log('Olá,', red + process.argv[2], reset +'!', 'Você tem', blue + process.argv[3], reset + 'anos.')

// C)

const value = Number(process.argv[3]) + 7
console.log('Olá,', process.argv[2], '!', 'Você tem', process.argv[3], 'anos.',
    'Em sete anos você terá', value)

