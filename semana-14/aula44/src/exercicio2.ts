// Faça uma função que receba dois números como parâmetros e imprima 
// no terminal, as seguintes informações:

// a) A soma desses números
// b) A subtração desses números
// c) A multiplicação desses números
// d) Qual deles é o maior

function operacoes(numeroUm: number, numeroDois: number): void {
    const soma: number = numeroUm + numeroDois;
    const subtracao: number = numeroUm - numeroDois;
    const multiplicacao: number = numeroUm * numeroDois;

    console.log('soma: ', soma)
    console.log('subtração: ', subtracao)
    console.log('multiplicação: ', multiplicacao)
}
operacoes(10, 2)

function maiorNumero(numberOne: number, numberTwo: number): number {
    return numberOne > numberTwo ? numberOne : numberTwo
}
console.log('maior numero: ', maiorNumero(9, 5))