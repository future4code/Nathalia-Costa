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
export const secondStudent: Student = new Student('456', 'thalia', 'thalia@f4.com', moment('08-10-1990', 'DD/MM/YYYY'), ['ciclismo', 'musica']);
export const thirdStudent: Student = new Student('789', 'gabi', 'gabi@f4.com', moment('07-02-2000', 'DD/MM/YYYY'), ['desenhar', 'dançar']);
export const fourthStudent: Student = new Student('1011', 'helo', 'helo@f4.com', moment('07-02-2000', 'DD/MM/YYYY'), ['procrastinar', 'musica']);
