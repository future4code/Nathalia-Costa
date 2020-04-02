//**Exercícios de interpretação de código**

// EXERCÍCIO 1

// O que o código abaixo está fazendo? Qual o resultado impresso no console? 

// let sum = 0
    
//     for(let i = 0; i < 15; i++) {
//       sum += i 
//     }
//     console.log(sum) 
//Passo 1:   i = 0 ; i < 15; i = 0 + 1, logo i agora tem o valor de 1
//           sum = 0 + 1 
//Passo 2:   i = 1; i = 1 + 1, i agora tem o valor de 2
//           sum = 1 + 2, sum agora tem o valor de 3
//e assim sucessivamente, até que i seja menor que 15.
//O RESULTADO IMPRESSO NO CONSOLE É: 105

// EXERCÍCIO 2

// Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// const novaLista = []
// const numero = 5
//     for(const item of lista){
//       if(item%numero === 0) {
//         novaLista.push(item)
//       }
//     }
//     console.log(novaLista)

// a. O que o comando `.push` faz? o comando `.push` adiciona um novo indíce na array

// b. Qual o valor impresso no console? Os números divisivel por 5.
// (4) [10, 15, 25, 30]
// 0: 10
// 1: 15
// 2: 25
// 3: 30
// length: 4
// __proto__: Array(0)

// c.1. Qual seria imprimido no console se a variável `numero` tivesse o valor de `3`? 
// Os valores que são divisiveis por 03, ou seja, [12, 15, 18, 21, 27, 30]. 
// c.2.E se tivesse o valor de `4`? O valores divisiveis por 4, ou seja, 0: [12].

//Exercícios de escrita de código

//EXERCÍCIO 3

// Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') 
// que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente.

// a. Escreva um programa que devolva o maior e o menor números contidos no array original

const arrayO = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = arrayO[0]
let menor = arrayO[0]

for (let indice of arrayO){
    if (indice > maior){
        maior = indice
    }
}
for(let indice of arrayO){
    if(indice < menor)
    menor = indice
}

console.log("O maior número é "+maior+" e o menor é "+menor)
// const numeros = [11, 15, 18, 14, 12, 13]
// let maior = numeros[0]

// for(let i = 0; i = numeros.length; i++){
//     const elemento = numeros[i]
//     if(elemento > maior){
//         maior = elemento;
//     }
// }
// console.log("O numero é maior "+maior)

// b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.

// c. Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.

// d. Escreva um programa que gere um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"

// // Este array será usado para exemplificar as respostas de todos os itens
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    
// // Resposta a.
// "O maior número é 130 e o menor é 21"

// // Resposta item b.
// [8, 3, 13, 4, 6, 2.1, 7, 12, 9, 10.3, 11, 5.5]

// // Resposta item c.
// [80, 30, 130, 40, 60, 70, 120, 90, 110] 

// // Resposta item d.
// [ 'O elemento do índex 0 é 80',
//   'O elemento do índex 1 é 30',
//   'O elemento do índex 2 é 130',
//   'O elemento do índex 3 é 40',
//   'O elemento do índex 4 é 60',
//   'O elemento do índex 5 é 21',
//   'O elemento do índex 6 é 70',
//   'O elemento do índex 7 é 120',
//   'O elemento do índex 8 é 90',
//   'O elemento do índex 9 é 103',
//   'O elemento do índex 10 é 110',
//   'O elemento do índex 11 é 55' ]