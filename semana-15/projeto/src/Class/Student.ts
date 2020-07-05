import { User } from "../Interface/User";
import moment from 'moment';
moment.locale('pt-BR');

export class Student implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        private birthDate: moment.Moment, 
        private hobbies: string[]
    ){}

    public getAge(): number {
        return moment().diff(this.birthDate, "years")
    }
}

export const firstStudent: Student = new Student('123', 'nath', 'nath@f4.com', moment('10-07-1995', 'DD/MM/YYYY'), ['cantar', 'dançar']);
// const studentTwo: Student = new Student('456', 'thalia', 'thalia@f4.com', moment('08-10-1990', 'DD/MM/YYYY'), ['ciclismo', 'musica']);


console.log(firstStudent)