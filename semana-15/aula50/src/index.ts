// 1 - a) Todas foram impressas, com excessão do 
// calculateBill que voltou [Function: calculateBill]
//2 - a) O tipo não pode ser atibuído, qualquer tipo que eu coloquei.
// b) Criar uma subclass para usar suas atribuições.

import { Client } from "./Interfaces/Client";
import { Residence } from "./Classes/Residence";
import { Commerce } from "./Classes/Commerce";
import { Industry } from "./Classes/Industry";
import { IndustrialClient } from "./Classes/IndustrialClient";
import { CommercialClient } from "./Classes/CommercialClient";
import { ResidentialClient } from "./Classes/ResidentialClient";
import { ClientManager } from "./ClientManager";

const ClientOne: Client = {
    name: "Nath",
    registrationNumber: 2,
    consumedEnergy: 50,
    calculateBill: (() => 2)
}

console.log(ClientOne)
console.log(ClientOne.calculateBill())

const residence: Residence = new Residence(2, '1234')
const commerce: Commerce = new Commerce(3, '4567')
const industry: Industry = new Industry(4, '7890')

console.log(residence.getCep())
console.log(commerce.getCep())
console.log(industry.getCep())

const ClientManager = new ClientManager()

const residentialClient: ResidentialClient = new ResidentialClient('nath2', 11, 9, '888', 9, '789456')
ClientManager.registerClient(residentialClient)

const commercialClient: CommercialClient = new CommercialClient('nath2', 11, 9, 999, 9, '789456')
const industrialClient: IndustrialClient = new IndustrialClient('nath3', 12,10, 100, 10, '123456')

