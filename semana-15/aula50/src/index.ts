import { Client } from "./Interfaces/Client";

const ClientOne: Client = {
    name: "Nath",
    registrationNumber: 2,
    consumedEnergy: 2,
    calculateBill: (() => 2)
}

console.log(ClientOne)
console.log(ClientOne.calculateBill())

// 1- a) Todas foram impressos, com excessão do 
// calculateBill que voltou [Function: calculateBill]