import { Commerce } from "./Commerce";
import { Client } from "../Interfaces/Client";

export class CommercialClient extends Commerce implements Client{
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: number, 
        floorsQuantity: number, 
        cep: string) {
        super(floorsQuantity, cep)
    }

    public calculateBill(): number {
        return this.consumedEnergy*0.53
    }
    public getCNPJ():number {
        return this.cnpj
    }
}