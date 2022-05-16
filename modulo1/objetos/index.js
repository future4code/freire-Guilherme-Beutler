// Exercícios de interpretação de código 

// 1)
// a. Matheus Nachtergaele.
//    Virginia Cavendish.
//    canal: Globo, horario: 14h.

// 2)
// a. nome: Juca, idade: 3, raca: SRD.
//    nome: Juba, idade:3, raca: SRD.
//    nome: Jubo, idade:3, raca: SRD.
// b. A sintaxe do espalhamento ou spred, permite fazer uma cópia de um objeto ou array inteiro e manipular ela
//    adicionando ou mudando propriedades.

// 3)
// a. false e undefined.
// b. undefined apareceu pois não foi definido nenhum valor a variavel altura.


// Exercícios de escrita de código //

// 1)

// const pessoa = {
//     nome: "Guilherme",
//     apelido: ["Gui", "Guigui", "Guizin"],
// }
// function apelidos(){
//     return console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}.`);
// }
// apelidos(pessoa);

// function novosApelidos(){
//     const apelidosNovos = {
//     ...pessoa,
//     apelido: ["Amor", "Querido", "Barbudo"],
//     }
//     return console.log(apelidosNovos);
// }
// novosApelidos(pessoa);

// 2)

// const primeiraPessoa = {
//     nome: "Mateus",
//     idade: 29,
//     profissao: "Piloto",
// }

// function fraseArray(){
//     return console.log(`"${primeiraPessoa.nome}, ${primeiraPessoa.nome.length}, ${primeiraPessoa.idade}, "${primeiraPessoa.profissao}", ${primeiraPessoa.profissao.length}`);
// }
// fraseArray(primeiraPessoa);

// 3)

// let carrinho = [];
// const fruta1 = {
//     nome: "Maça",
//     disponibilidade: true,
//     }

// const fruta2 = {
//     nome: "Laranja",
//     disponibilidade: true,
// }
// const fruta3 = {
//     nome: "Banana",
//     disponibilidade: false,
// }
// function listaCarrinho(fruta){
//     return carrinho.push(fruta)    
// }
// listaCarrinho(fruta1)
// listaCarrinho(fruta2)
// listaCarrinho(fruta2)

// console.log(carrinho);

// DESAFIOS //

// 1)

// function dadosUsuario(){
//     const nomeUsuario = prompt("Qual seu nome?");
//     const idadeUsuario = prompt("Qual sua idade?");
//     const profUsuario = prompt("Qual a sua profissão?");
//     const retornoUsuario = {
//         nome: nomeUsuario,
//         profissão: profUsuario,
//         idade: idadeUsuario,            
//     }
//     return retornoUsuario
// }
// console.log(dadosUsuario());

// 2)

// function filmes() {
//     const primeiroFilme = {
//         nome: "Constantine",
//         ano: 2005,    
//     }
//         const segundoFilme = {
//         nome: "Armagedom",
//         ano: 1998,
//     }
//     console.log(`O primeiro filme foi lançado antes do segundo filme? ${primeiroFilme.ano<=segundoFilme.ano}`);
//     console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${primeiroFilme.ano===segundoFilme.ano}`);
// }
// filmes();



// 3)

// let carrinho = [];
// const fruta1 = {
//     nome: "Maça",
//     disponibilidade: true,
//     }

// const fruta2 = {
//     nome: "Laranja",
//     disponibilidade: true,
// }
// const fruta3 = {
//     nome: "Banana",
//     disponibilidade: false,
// }
// function listaCarrinho(fruta){
//     return carrinho.push(fruta)    
// }

// function disponibilidade() {
//     return valorInvertido = fruta1.disponibilidade!=fruta1.disponibilidade;
// }

// listaCarrinho(fruta1);
// listaCarrinho(fruta2);
// listaCarrinho(fruta2);

// console.log(carrinho);
// console.log(disponibilidade());


