import { User } from './User'
import { Customer } from './Customer'

const userInstancia: User = new User('1', 'astro@dev.com', 'Astrodev', '123456')

// console.log('UserID:', userInstancia.getId())
// console.log('UserName:', userInstancia.getName())
// console.log('UserEmail:', userInstancia.getEmail())

const CustomerInstancia: Customer = new Customer('2', 'nath@dev.com', 'nath', '96321', '852-741-963')
console.log(CustomerInstancia)
console.log('CustomerID:', CustomerInstancia.getId())
console.log('CustomerName:', CustomerInstancia.getName())
console.log('CustomerEmail:', CustomerInstancia.getEmail())
console.log('CustomerPurchaseTotal:', CustomerInstancia.purchaseTotal)
console.log('CustomerEmail:', CustomerInstancia.getCreditCard())
// 3. a - Não é possivel porque o password vem da classe Pai e está como private.