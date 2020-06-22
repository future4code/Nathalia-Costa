// Faça uma função que receba um array de números e 
// retorne um objeto que tenha as seguintes informações: 
// a quantidade de números que há no array, 
// a quantidade de números ímpares no array e a 
// soma de todos os elementos do array.

const array: number[] = [6, 3, 8, 2, 9];

const quantidadeNumeros: number = array.length;
console.log('Quantidades de números: ', quantidadeNumeros);


let count:number = 0;
for(let i = 0; i < array.length; i++){
    if(array[i]%2 != 0)
    count++;
}
console.log('Números impares: ', count)

let soma:number = 0;
for(let i = 0; i < array.length; i++){
    soma += array[i];
}
console.log('Soma: ', soma)

type respostas = {
    alternativaA: number,
    alternativaB: number,
    alternativaC: number
}

const gabarito: respostas = {
    alternativaA: quantidadeNumeros,
    alternativaB: count,
    alternativaC: soma
}
console.log('Gabarito: ', gabarito)