// class Extrato { 
//     private valor: number
//     private data: string
//     private descricao: string

// }
export class conta {
    //  Atributos
    private nome: string
    private cpf: string
    private idade: number
    private saldoAtual: number = 0
    private extrato: Array<Object> = []
    // {valor: number, data: string, descricao: string}

    constructor( nome: string, cpf: string, idade: number){
        this.nome = nome
        this.cpf = cpf
        this.idade = idade
    }

    //  Getters
    public getNome(): string{
        return this.nome
    }
    public getCPF(): string{
        return this.cpf
    }
    public getIdade(): number{
        return this.idade
    }
    public getSaldoAtual(): number{
        return this.saldoAtual
    }
    public getExtrato(): object{
        return this.extrato
    }

    //  Setters
    // public AddSaldo():void{
    //     this.SaldoAtual ++
    // }
}
