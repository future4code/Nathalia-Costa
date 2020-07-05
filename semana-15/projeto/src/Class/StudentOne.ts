import { Student } from "./Student";

export class StudentOne extends Student {
    constructor(
        id: string,
        name: string,
        email: string,
        birthDate: moment.Moment, 
        hobbies: string[]
    ){
        super(id, name, email, birthDate, hobbies)
    }
}
