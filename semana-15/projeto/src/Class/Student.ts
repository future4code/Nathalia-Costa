import { User } from "../Interface/User";
import moment from 'moment';
moment.locale('pt-BR');

export class Student implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birthDate: moment.Moment, 
        public hobbies: string[]
    ){}

    public getAge(): number {
        return moment().diff(this.birthDate, "years")
    }
}