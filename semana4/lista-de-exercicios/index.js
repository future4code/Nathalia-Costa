// Aula 14 - DOM
// Exercício de Leitura de código
// Analisar, escrever o que ele faz, como faz e qual será o valor impresso no console.

/* 1. Ele converte o valor em Dolar para Reais. Ele solicita qual o valor da cotação 
do dolar através de um Prompt e dar um return com o valor indicado na função * a 
cotação enviada no Prompt. Mostrada no conlose pela variavel meuDinheiro que 
apresenta o valor final da multiplicação. */

/* 2. function investeDinheiro tem duas variaveis uma para saber qual tipo de investimento
e outra o valor a ser investido. Com um Switch ele analisa qual foi o tipo de investimento 
e assim aplicar o valor em juros. O return volta com o valor investido de acordo com o tipo
informado. Após a function ele dar duas variaveis de investimento. Sendo o primeiro em Ações 
que terá um retorno no console. E o segundo em Tesouro Direto, porém não existe esse tipo de 
financiamento e será enviado um alert informando "TIPO DE INVESTIMENTO INFORMADO INCORRETO".*/

/* 3. Existe 3 arrays [numeros, array1, arrays2], a array numeros[] está preenchidas com alguns,
numeros e logo abaixo há um for...of para que os numeros dessa arrays sejam divididos em pares e
ímpares. Se par inseridas no array1, caso não insirir no array2. 
Com isso o console.log("Quantidade (...), numeros.length") imprimirá a quantidade total de número 
na array numeros. Os demais consoles exibirão a quantidade de numeros da array1 com pares e da array2 
com os impares.

/* 4. O number infinity é qualquer número positivo. Ou seja, nesse código ele vai procurar qual número não
é menor que infinity. Dando ao número1 o valor de -10 e o número2 o seu maior número 1590.*/

// Exercícios de lógica de programação

/* 1. Quais são os valores das expressões lógicas...

a. false;
b. false;
c. true;
d. true;
e. true;
*/

/* 2. O código dado não funciona, não determinava um array, a condição if se for par e havia um <= dando um 
número a mais. Abaixo está o código com as devidas correções ...

let array = []
const quantidadeDeNumerosPares = prompt("Digite um número");
let i = 0

while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  if(i%2 === 0){
    array.push(i)
  }
  i++
}
*/
/* 3. Trigonometria 
let lado1 = prompt("Digite o tamanho do lado 1");
let lado2 = prompt("Digite o tamanho do lado 2");
let lado3 = prompt("Digite o tamanho do lado 3");

function triangulo(lado1, lado2, lado3){
  if(lado1 === lado2 && lado2 !== lado3 || lado2 === lado3 && lado1 !== lado3 || lado1 === lado3 && lado1!==lado2){
    console.log("Seu triângulo é Isósceles");
  } else if(lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3){
    console.log("Seu triângulo é Escaleno");
  } else {
    console.log("Seu triângulo é Equilátero");
  }
}
triangulo(lado1, lado2, lado3) */

/* 4. IMCOMPLETO

function numeros(numeroUm, numeroDois){
  if((numeroUm < numeroDois) && (numeroUm%numeroDois !== 0)){
    console.log("O maior é: "+numeroDois)
    console.log(numeroUm+" não é divisível por "+numeroDois)
  } else
  if((numeroUm > numeroDois) && (numeroDois%numeroUm === 0)){
    console.log("O maior é: "+numeroUm)
  }
}
numeros(15,30)*/ 

// Aula 15 - Ojetos, Strings e Arrays
// Exercícios de Funções

/* 1. INCOMPLETA

const array = [15, 12, 17, 19, 10]
function analiseDeArray(array){
  let numberDois = 1
  for(let numero of array){
    if(numero > numberDois){
      console.log(numero)
    }
    numberDois++
  }
}
analiseDeArray(array)
*/

// Exercício de Objetos
/* 1. Arrays são armazenamentos de informações e objetos são 
amazenamento de informações com categorias. Um objeto pode ser 
guardado dentro de uma array*/