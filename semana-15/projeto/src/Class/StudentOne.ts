import { Student } from "./Student";
import { User } from "../Interface/User";

export class StudentOne extends Student implements User{
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birthDate: moment.Moment, 
        public hobbies: string[]
    ){
        super(id, name, email, birthDate, hobbies)
    }
}