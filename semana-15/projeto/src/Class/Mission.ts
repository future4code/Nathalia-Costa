import { Teacher } from "./Teacher";
import { Student } from "./Student";

export abstract class Mission {
    private name: string = ''
    constructor(
        protected id: string,
        protected dateStart: moment.Moment,
        protected dateEnd: moment.Moment,
        protected teachersList: Teacher[],
        protected studentsList: Student[],
        private currentModule?: number = undefined
    ) {}
    public getId(): string{
        return this.id;
    }
    public getName(name: string): string {
        return this.name
    }
    public getDateStart(): moment.Moment {
        return this.dateStart
    }
    public getDateEnd(): moment.Moment {
        return this.dateEnd
    }
    public addTeacher(teacher: Teacher){
        this.teachersList.push(teacher)
    }
    public addStudent(student: Student){
        this.studentsList.push(student)
    }
    public getCurrentModule(): number | undefined {
        return this.currentModule;
    }
    public setName(name: string) {
        this.name = name;
    }
}