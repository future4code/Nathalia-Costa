//**Exercícios de interpretação de código**
// Exercício 01
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

//Respostas -->

a. Explique o que o código faz.
Solicita um número ao úsuario e se o resto da divisão inteira por 2 for 0, 
então o número é par, ou ímpar caso contrário.

b. Qual o teste que ele realiza? 
O teste determina se um número é par ou impar. 

c. Para que tipos de números ele imprime no console "Passou no teste"? 
Números pares, como 10, 16 e 20.
d. Para que tipos, a mensagem é "Não passou no teste"?
Números ímpares, como 05, 11 e 27.
*/
/*
// Exercício 02

let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
     
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//Respostas-->

a. Para que serve o código acima?
O código serve para dizer o preço das frutas listadas e as não listadas tem um valor fixo de R$5. 

b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
O preço da fruta Maçã é R$ 2.25

c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva.
Qual seria o preço que você pagaria?
Pagaria o valor de R$ 24,55 (Que banana cara)
    
d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console 
se retirássemos o `break` que está logo acima do `deafult` (o `break` indicado pelo comentário 
"BREAK PARA O ITEM d.")?
O break serve como um "achei minha opção podemos sair do bloco" quando tiramos ele continua a 
analisar o código e cai no default.
*/
///Exercício 03
/*
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
  console.log(mensagem)
}

//Respostas -->
Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal? 
Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.

Essa é a mensagem de errp "index.js:81 Uncaught ReferenceError: mensagem is not defined at index.js:81" 
O erro é que o console.log(mensagem) está fora do escopo do bloco, caso ela entre dentro do primeiro bloco,
o erro desaparece e podemos saber qual o número maior ou menor.
*/

//**Exercícios de escrita de código**

//EXERCÍCIO 4
/*
Nos exercícios abaixo, será necessário que você trabalhe com a comparação de números. Leia abaixo:

a. Crie um programa que receba dois números do usuário através do `prompt` e imprima-os na ordem 
**decrescente**. O que acontece com o seu programa se os 2 números forem iguais? 
(é só testar e colocar um comentário descrevendo o que aconteceu)

const number1 = Number(prompt("Digite o primeiro número."));
const number2 = Number(prompt("Digite o próximo número."));

if(number1 < number2){
    console.log(number2, number1)
} else if(number1 > number2){
    console.log(number1, number2) 
}else{      //SEM ISSO NÃO APARECE NADA
   console.log("Os números são iguais") 
}

b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem **decrescente**. 
O que acontece como seu programa se os 3 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)

c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais, mostre um aviso ao usuário indicando que ele deve, 
ao menos, inserir um número diferente.
*/


const number1 = Number(prompt("Digite o primeiro número."));
const number2 = Number(prompt("Digite o próximo número."));
const number3 = Number(prompt("Digite o terceiro número."));

if(number1 < number2 && number2 < number3){
    console.log(number3, number2, number1)
} else if( number2 < number1 && number1 < number3){
    console.log(number3, number1, number2)
} else if(number2 < number3 && number3 < number1){
    console.log(number1 < number3 < number2)
} else if(number3 < number2 && number2 < number1){
    console.log(number1 < number2 < number3)
} else if(number3 < number1 && number1 < number2){
    console.log(number2 < number1 < number3)
} else if(number1 < number3 && number3 < number2){
    console.log(number2 < number3 < number1)
} else if(number1 === number2 === number3){
    console.log("Todos os números são iguais.")
} else{
    // TENTANDO ENTENDER ESSA LÓGICA
}
