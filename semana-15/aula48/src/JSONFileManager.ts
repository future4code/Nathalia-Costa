import * as fs from 'fs'

export class JSONFileManager{

    private fileName: string 

    constructor(fileName: string){
        this.fileName = fileName
    }

    public getObjectFromFile(): Object {
        const file: Buffer | string = fs.readFileSync(this.fileName).toString("utf-8")
        return file ? JSON.parse(file) : []
    }

    public writeObjectToFile(data: any): void{
        const updatedData: string = JSON.stringify(data,null, 2)
        fs.writeFileSync(this.fileName, updatedData)
    }
}
