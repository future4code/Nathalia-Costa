const array = [6, 3, 8, 2, 9];
const quantidadeNumeros = array.length;
console.log('Quantidades de números: ', quantidadeNumeros);
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0)
        count++;
}
console.log('Números impares: ', count);
let soma = 0;
for (let i = 0; i < array.length; i++) {
    soma += array[i];
}
console.log('Soma: ', soma);
const gabarito = {
    alternativaA: quantidadeNumeros,
    alternativaB: count,
    alternativaC: soma
};
console.log('Gabarito: ', gabarito);
//# sourceMappingURL=exercicio3.js.map