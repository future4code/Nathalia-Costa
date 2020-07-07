import {User} from './User'

export class Customer extends User {
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
      return this.creditCard;
    }
}

// 2. a - Chamado o constructor da class Custumer apenas 1 vez.
// b - Chamado o constructor da class User 2 vezes. Primeiro ele é chamado ao
// cria a instancia User e depois chamado novamente na instancia do Customer, 
// pois ele é subclasse do User.