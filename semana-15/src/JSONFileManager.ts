import * as fs from 'fs'

export class JSONFileManager{

    private fileName: string 

    constructor(fileName: string){
        this.fileName = fileName
    }

    public getObjectFromFile(): Object {
        const fileBuffer: Buffer = fs.readFileSync(this.fileName)
        const fileText: string = String(fileBuffer)
        return fileText ? JSON.parse(fileText) : []
    }

    public writeObjectToFile(data: any): void{
        const updatedData: string = JSON.stringify(data,null, 3)
        fs.writeFileSync(this.fileName, updatedData)
    }
}
