// EXERCICIO 02

const operacao: string = process.argv[2];
const numberOne = Number(process.argv[3]);
const numberTwo = Number(process.argv[4]);

function aplicacao(operacao: string, numberOne: number, numberTwo: number){
    switch(operacao){
        case "add":
            console.log(numberOne + numberTwo)
        break;
        case "sub":
            console.log(numberOne - numberTwo)
        break;
        case "mult":
            console.log(numberOne * numberTwo)
        break;
        case "div":
            console.log(numberOne / numberTwo)
        break;
        default:
            break
    }
}
aplicacao(operacao, numberOne, numberTwo)
