//**Exercícios de interpretação de código**
// Exercício 01
//const minhaFuncao = (quantidade) => {
// 	const array = []
// 	for(let i = 0; i < quantidade; i+=2) {
// 			for(let j = 0; j < i; j++) {
// 				array.push(j)
// 			}
// 	}
// 	return array
// }

// console.log(minhaFuncao(8))

// a. []
// length: 0
// __proto__: Array(0)

// b. 
// (6) [0, 1, 0, 1, 2, 3]
// 0: 0
// 1: 1
// 2: 0
// 3: 1
// 4: 2
// 5: 3
// length: 6
// __proto__: Array(0)

// c. 
// (12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]
// 0: 0
// 1: 1
// 2: 0
// 3: 1
// 4: 2
// 5: 3
// 6: 0
// 7: 1
// 8: 2
// 9: 3
// 10: 4
// 11: 5
// length: 12
// __proto__: Array(0)

// Exercício 02
// a. 0 / 2 / undefined

// b.
// Quando troquei os nomes por números, apareceu em 
// qual ordem da array o elemento está.
// Dessa forma...

// let arrayDeNomes = [4, 5, 7, 6, 3];
// 			     //[0, 1, 2, 3, 4]
// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, 4)); //[0]
// console.log(funcao(arrayDeNomes, 7)); //[2]
// console.log(funcao(arrayDeNomes, 6)); //[3]

// Exercício 03

//Esse código decreve a array jenifer com dois elementos,
//na função for ela soma e multiplica os valor estabelecidos
//no escopo da function metodo e logo após ela entra na nova 
//array chamada carlos e retorna.


// jeniffer = [3, 1]
// console.log(jeniffer)
// function metodo(jeniffer) {
// 	let resultadoA = 0;
// 	let resultadoB = 1;
// 	let carlos = [];
  
// 	for (let x of jeniffer) {
// 	  resultadoA += x;
// 	  resultadoB *= x;
// 	}
  
// 	carlos.push(resultadoA);
// 	carlos.push(resultadoB);
// 	return carlos;
	
//   }
//   const mostra = metodo(jeniffer)
//   console.log(mostra)