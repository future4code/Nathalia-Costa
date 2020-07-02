import { User } from "./User";

export class Employee extends User{
    protected admissionDate: string;
    protected baseSalary: number;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,     
        admissionDate: string,
        baseSalary: number
      ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Employee");
        this.admissionDate = admissionDate;
        this.baseSalary = baseSalary;
      }
    public getAdmissionDate(): string {
        return this.admissionDate;
    }
    public getBaseSalary(): number {
        return this.baseSalary;
    }
}