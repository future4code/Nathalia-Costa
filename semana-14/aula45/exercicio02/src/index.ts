// EXERCICIO 02

const operacao: string = process.argv[2];
const numberOne = Number(process.argv[3]);
const numberTwo = Number(process.argv[4]);
const colors = require('colors')

function aplicacao(operacao: string, numberOne: number, numberTwo: number){
    switch(operacao){
        case "add":
            console.log(colors.green(numberOne + numberTwo))
        break;
        case "sub":
            console.log(colors.red(numberOne - numberTwo))
        break;
        case "mult":
            console.log(colors.magenta(numberOne * numberTwo))
        break;
        case "div":
            console.log(colors.cyan(numberOne / numberTwo))
        break;
        default:
            break
    }
}
aplicacao(operacao, numberOne, numberTwo)
