import { Mission } from "./Mission";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

export class FullTimeMission extends Mission {
    constructor(
        public MissionName: string,
        id: string,
        dateStart: moment.Moment,
        dateEnd: moment.Moment,
        teachersList: Teacher[],
        studentsList: Student[],
        currentModule: number | undefined
    ){
        super(
            id,
            dateStart,
            dateEnd,
            teachersList,
            studentsList,
            currentModule
        )
    }
}