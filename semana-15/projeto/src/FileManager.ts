import * as fs from "fs";
import { Student } from "./Class/Student";
import { Teacher } from "./Class/Teacher";
import { Mission } from "./Class/Mission";

export class FileManager {
  constructor(private filePath: string) {}

  public setFilePath(path: string): void {
    this.filePath = path;
  }

  public writeFile(data: any): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data));
  }

  public readFile(): any {
    const data = fs.readFileSync(this.filePath);
    return JSON.parse(data.toString());
  }

  public registerInJson( classInstance: Student | Teacher | Mission){
    let classInstances: (Student | Teacher | Mission)[] = [];
    try{
      classInstances = this.readFile();
    } catch(e){
      if(e){
        this.writeFile(classInstances)
      }
    }
    classInstances.push(classInstance)
    return this.writeFile(classInstances)
  }
}
