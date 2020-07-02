import { User } from './User'
import { Customer } from './Customer'
import { Employee } from './Employee'
import { Seller } from './Seller'

const userInstancia: User = new User('1', 'astro@dev.com', 'Astrodev', '123456')

// console.log('UserID:', userInstancia.getId())
// console.log('UserName:', userInstancia.getName())
// console.log('UserEmail:', userInstancia.getEmail())

const CustomerInstancia: Customer = new Customer('2', 'nath@dev.com', 'nath', '96321', '852-741-963')
// console.log(CustomerInstancia)
// console.log('CustomerID:', CustomerInstancia.getId())
// console.log('CustomerName:', CustomerInstancia.getName())
// console.log('CustomerEmail:', CustomerInstancia.getEmail())
// console.log('CustomerPurchaseTotal:', CustomerInstancia.purchaseTotal)
// console.log('CustomerEmail:', CustomerInstancia.getCreditCard())
// 3. a - Não é possivel porque o password vem da classe Pai e está como private.
// console.log("IntrocuceYourself: ", CustomerInstancia.introduceYourself())

const EmployeeInstancia: Employee = new Employee('3', 'lili@dev.com', 'Lica', '741258', "08/05/2018", 1856)
// console.log(EmployeeInstancia)
// console.log('EmployeeID:', EmployeeInstancia.getId())
// console.log('EmployeeName:', EmployeeInstancia.getName())
// console.log('EmployeeEmail:', EmployeeInstancia.getEmail())
// console.log('EmployeeBaseSalary:', EmployeeInstancia.getBaseSalary())
// console.log('EmployeeAdmissionDate:', EmployeeInstancia.getAdmissionDate())
// console.log('EmployeeAdmissionDate:', EmployeeInstancia.calculateTotalSalary())
// 6. a - O construtor da classe user foi chamado User.
// b - console log --> id, email, name, password, admissionDate e baseSalary.

const SellerInstancia: Seller = new Seller('4', 'kio@dev.com', 'kio', '369852', '05/08/2008', 2500)

console.log(SellerInstancia)
console.log('SellerID:', SellerInstancia.getId())
console.log('SellerName:', SellerInstancia.getName())
console.log('SellerEmail:', SellerInstancia.getEmail())
console.log('SellerBaseSalary: R$', SellerInstancia.getBaseSalary())
console.log('SellerAdmissionDate:', SellerInstancia.getAdmissionDate())
console.log('SellerCalculateTotalSalary: R$', SellerInstancia.calculateTotalSalary())
// 8. a - id, email, name, password, admissionDate e baseSalary.
// b - Imprimiu tudo. SellerID, SellerName, SellerEmail, SellerBaseSalary, 
// SellerAdmissionDate, SellerCalculateTotalSalary

