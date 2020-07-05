// TO DO
// criar duas turmas, dois alunos e quatro professores e 
// adicione-os nas turmas da forma que achar mais pertinente.

import moment from "moment";
import { FileManager } from "./FileManager";
import {firstStudent, secondStudent, thirdStudent, fourthStudent } from "./Class/Student";
import { teacherOne, teacherTwo } from "./Class/Teacher";
import { fullTimeMission } from "./Class/FullTimeMission";
import { nightMission } from "./Class/NightMission";
moment.locale('pt-BR');



const fm = new FileManager("D:/BackUP PepaPlanalto/Labenu_/NTHL - GITHUB/Nathalia-Costa/semana-15/projeto/src/JSON/students.json");

fm.registerInJson(firstStudent);
fm.registerInJson(secondStudent);
fm.registerInJson(thirdStudent);
fm.registerInJson(fourthStudent);

fm.setFilePath("D:/BackUP PepaPlanalto/Labenu_/NTHL - GITHUB/Nathalia-Costa/semana-15/projeto/src/JSON/teacher.json")

fm.registerInJson(teacherOne)
fm.registerInJson(teacherTwo)


fm.setFilePath("D:/BackUP PepaPlanalto/Labenu_/NTHL - GITHUB/Nathalia-Costa/semana-15/projeto/src/JSON/mission.json")

fullTimeMission.setName('Nice')
fullTimeMission.addStudent(firstStudent)
fullTimeMission.addStudent(secondStudent)
fullTimeMission.addTeacher(teacherOne)

fm.registerInJson(fullTimeMission)

nightMission.setName("Jaca")
nightMission.addStudent(thirdStudent)
nightMission.addStudent(fourthStudent)
fullTimeMission.addTeacher(teacherTwo)

fm.registerInJson(nightMission)


