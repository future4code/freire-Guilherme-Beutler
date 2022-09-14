// ---> exercício 1 <---

//a) 
/*
    O construtor serve para inicializar variáveis.
Utilizamos a keyword class para declarar uma classe, que será
nosso modelo para construir objetos (instâncias)
    O corpo da classe pode conter uma função chamada
constructor, que recebe como parâmetros os atributos dessa
classe, referenciados pela keyword this
    A criação de novas instâncias é feita com a keyword new.*/

//b) 1

//c) Criando metodos GET e SET.

export type Transaction = {
    description: string,
    value: number,
    date: string
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getName = (): string => this.name;
  
  }

export const user: UserAccount = new UserAccount("123.456.789-10", "Joao", 29);