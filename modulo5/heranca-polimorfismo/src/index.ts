// ---> EXERCÍCIOS DE HERANÇA <---

//1
//a) Não, pois é necessário criar um método que chame variável privada.
//b) 1 vez.

//2
//a) 1 vez.
//b) 1 vez.



export default class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(id: string, email: string, name: string, password: string) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }
}

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
        console.log(this.creditCard)
      return this.creditCard;
    }
  }





