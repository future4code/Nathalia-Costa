import { Employee } from "./Employee";

export class Seller extends Employee {
    private salesQuantity: number = 0;

    public getSaleQuantity(): number {
        return this.salesQuantity
    }
    public setSalesQuantity(quantity: number): void {
        this.salesQuantity = quantity
    }
}