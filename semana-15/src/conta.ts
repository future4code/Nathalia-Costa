export class conta {
    //  Atributos
    private nome: string
    private cpf: string
    private nascimento: string
    private saldoAtual: number = 0
    private extrato: Array<Object> = []
    // {valor: number, data: string, descricao: string}

    constructor( nome: string, cpf: string, nascimento: string){
        this.nome = name
        this.cpf = cpf
        this.nascimento = nascimento
    }

    //  Getters
    public getNome():string{
        return this.nome
    }
    public getCPF(): string{
        return this.cpf
    }
    public getNascimento():string{
        return this.nascimento
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
