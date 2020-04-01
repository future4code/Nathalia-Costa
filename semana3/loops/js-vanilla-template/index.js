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
// Os valores que são divisiveis por 03 (12, 15, 18, 21, 27, 30). 
// c.2.E se tivesse o valor de `4`?

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 3
for(const item of lista){
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)
