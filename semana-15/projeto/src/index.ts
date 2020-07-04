// TO DO
// criar duas turmas, dois alunos e quatro professores e 
// adicione-os nas turmas da forma que achar mais pertinente.

import { Student } from "./Class/Student";
import moment from "moment";
moment.locale('pt-BR');


const studentOne: Student = new Student('123', 'nath', 'nath@f4.com', moment('10-07-1995', 'DD/MM/YYYY'), ['cantar', 'dançar']);
const studentTwo: Student = new Student('456', 'thalia', 'thalia@f4.com', moment('08-10-1990', 'DD/MM/YYYY'), ['ciclismo', 'musica']);

console.log(studentOne)
console.log(studentTwo)
