import { User } from "../Interface/User";

export enum TEACHER_SPECIALTY {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    OOP = "OOP",
    BACKEND = "BACKEND",
}
  
export class Teacher implements User {
    constructor(
      public id: string,
      public name: string,
      public email: string,
      public specialties: TEACHER_SPECIALTY[]
    ) {}
}

export const teacherOne = new Teacher('1', 'Maria', 'maria@f4.com', [TEACHER_SPECIALTY.CSS, TEACHER_SPECIALTY.REDUX, TEACHER_SPECIALTY.TESTES])