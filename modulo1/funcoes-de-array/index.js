// --------------------------- Exercícios de interpretação de código ----------------------------//


// 1) Imprime apenas os objetos da primeira array, pois não tem um return.

// 2) Será impresso uma nova array apenas com o nome dos usuários da primeira array.

// 3) Imprimi uma nova array excluindo o parametro colocado no filter (Chijo).


// --------------------------- Exercícios de escrita de código ----------------------------//


// 1)

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

// a. Crie um novo array que contenha apenas o nome dos doguinhos:

const arrayNomePets = pets.map((item) => {
    return item.nome;
})
console.log(arrayNomePets);

// b. Crie um novo array apenas com os cachorros salsicha:

const petSalsicha = pets.filter((cachorro) => {
    if (cachorro.raca === "Salsicha") {
        return true;
    }
})
console.log(petSalsicha);

// c. 

const petPoodle = pets.filter((cachorro) => {
    if (cachorro.raca === "Poodle") {
        return true
    }
})

const mensagemPoodle = petPoodle.map((cachorro) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorro.nome}!`
})
console.log(mensagemPoodle);

// 2) 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a. Crie um novo array que contenha apenas o nome de cada item:

const arrayNomeProdutos = produtos.map((produto) =>{
    return produto.nome
})
console.log(arrayNomeProdutos);

// b.

const produtosComDesconto = produtos.map((produto) => {
    return (produto.preco - (produto.preco * 0.05) . toFixed(1));
})
console.log(produtosComDesconto);

 // c.  Crie um novo array que contenha apenas os objetos da categoria Bebidas:

const arrayBebidas = produtos.filter((produtos) => {
    if (produtos.categoria === "Bebidas") {
        return true;
    }
})
console.log(arrayBebidas);

// d. Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê":

const produtoYpe = produtos.filter((produto) => {
    if (produto.nome.includes("Ypê")) {
        return true;
    }
})
console.log(produtoYpe);

// e. 

const produtoYpe2 = produtos.filter((produto) => {
    if (produto.nome.includes("Ypê")) {
        return true;
    }
})

const mensagemYpe = produtoYpe2.map((ype) => {
    return `Compre ${ype.nome} por R$${ype.preco}`;
})
console.log(mensagemYpe);


// --------------------------- DESAFIOS ----------------------------//

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

// a. 

const arrayAlfabetica = pokemons.map((pokemon) => {
    return pokemon.nome;
})
console.log(arrayAlfabetica.sort());

// b.

pokemons.splice(0, 1);
pokemons.splice(1, 1);
pokemons.splice(2, 1);


console.log(pokemons);

