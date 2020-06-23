import * as fs from 'fs';

// EXERCICIO 01

// const nome: string = process.argv[2];
// const idade = Number(process.argv[3]);

// function programa(nome: string, idade: number){
//     console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade+7}.`)
// }
// programa(nome, idade)

// EXERCICIO 02

// const operacao: string = process.argv[2];
// const numberOne = Number(process.argv[3]);
// const numberTwo = Number(process.argv[4]);

// function aplicacao(operacao: string, numberOne: number, numberTwo: number){
//     switch(operacao){
//         case "add":
//             console.log(numberOne + numberTwo)
//         break;
//         case "sub":
//             console.log(numberOne - numberTwo)
//         break;
//         case "mult":
//             console.log(numberOne * numberTwo)
//         break;
//         case "div":
//             console.log(numberOne / numberTwo)
//         break;
//         default:
//             break
//     }
// }
// aplicacao(operacao, numberOne, numberTwo)

// EXERCICIO 03
function adicionarTarefa(caminho: string, tarefa:string): void{
    const bufferArquivo: Buffer = fs.readFileSync(caminho);
    const texto: string = bufferArquivo.toString();
    const tarefas: string[] = JSON.parse(texto);

    tarefas.push(tarefa)
    
    const tarefasRefresh: string = JSON.stringify(tarefas)
    fs.writeFileSync(caminho, tarefasRefresh)

    console.log("Tarefa adicionada com sucesso!")
}
const caminho: string = process.argv[2];
const tarefa: string = process.argv[3];

adicionarTarefa(caminho, tarefa)