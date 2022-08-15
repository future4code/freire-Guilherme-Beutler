// A) Não deixa alterar para número pois a variável está tipada como string!

const minhaString: string = "Sou uma string"

// B) Para as variáveis poderem assumir valores diferentes, 
//      podemos usar o UNION TYPE

const meuNumero: number | string = "cinquenta"

// C)

type Person = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum CoresDisponiveis {
    MARRON = "Marron",
    LARANJA = "Laranja",
    PRETO = "Preto"
}

const person1: Person = {
    nome: "Zeca",
    idade: 18,
    corFavorita: CoresDisponiveis.MARRON
} 
const person2: Person = {
    nome: "Frida",
    idade: 20,
    corFavorita: CoresDisponiveis.PRETO
} 
const person3: Person = {
    nome: "Tom",
    idade: 22,
    corFavorita: CoresDisponiveis.LARANJA
} 