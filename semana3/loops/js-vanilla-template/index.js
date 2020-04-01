/* 1--->
resultado = a. false

resultado = b. false

resultado = c. true

resultado = d. false

resultado = e. boolean 

2--->
a. São maneiras de guardar mais de uma informação ao mesmo tempo.
b. [0]
c. array.length
d.  I- undefined
    II- null
    III- 11
    IV- 3 e 4
    V- 19 e 9
    VI- 3
    VII- 1
*/

// 1. Convertendo
//A. 
const FAHRENHEIT1 = 77;
const KELVIN1 = (FAHRENHEIT1 - 32)*5/9 + 273.15;
console.log("a. KELVIN - ", KELVIN1);
//B.
const CELSIUS = 80;
const FAHRENHEIT2 = CELSIUS*9/5 + 32;
console.log("b. FAHRENHEIT - ", FAHRENHEIT2);
//C.
const KELVIN3 = (30 - 32)*5/9 + 273.15;
const FAHRENHEIT3 = 30*9/5 + 32;
console.log("c. FAHRENHEIT -", FAHRENHEIT3, 
"- KELVIN- ", KELVIN3);
//D.
let VALOR = prompt("Qual valor você deseja converter para Kelvin e Fahrenheit?");
let KELVIN4 = (VALOR- 32)*5/9 + 273.15;
let FAHRENHEIT4 = VALOR*9/5 + 32;
console.log("d. FAHRENHEIT - ", FAHRENHEIT4, "KELVIN - ", KELVIN4);

// 2. Questionário
const nome = prompt("1. Qual o seu nome?")
console.log("1. Qual o seu nome? "+"\n Resposta: "+nome)

const idade = prompt("2. Qual a sua idade?")
console.log("2. Qual a sua idade?"+" Resposta\n "+idade+" anos.")

const cor = prompt("3. Qual a sua cor favorita?")
console.log("3. Qual a sua cor favorita? "+"\n Resposta: "+cor)

const ifood = prompt("4. O que você pediria no Ifood agora?")
console.log("4. O que você pediria no Ifood agora?"+"\n Resposta: "+ifood)

const pedidoIfood = prompt("5. Você costuma sempre pedir isso no Ifood? :D")
console.log("5. Você costuma sempre pedir isso no Ifood?"+"\n Resposta: "+pedidoIfood)

//3. Consumo de kWh
let consumo = prompt("Qual foi seu consumo de quilowatt-hora (kWh) da sua resicência?")
valorConsumo = consumo*0.05;
console.log("O valor do seu consumo é R$"+valorConsumo)

let consumoCliente = 280*0.05;
console.log("O valor de consumo é de R$ "+consumoCliente)

let desconto = consumoCliente*15/100
console.log("O valor a ser pago com desconto é R$ "+desconto)

// DESAFIO
//a.
let valorLbs = 20/2.2;
console.log("a. 20lb equivalem a "+valorLbs+" kg");

//b.
let valorOz = 10.5/35.274;
console.log("b. 10.5oz equivalem a "+valorOz+" kg");

//c.
let valorMi = 100*1609;
console.log("c. 100mi equivalem a "+valorMi+" m");

//d.
let valorFt = 50/3.281;
console.log("d. 50ft equivalem a "+valorFt+" m");

//e.
let valorGal = 103.56*379;
console.log("e. 103.56gal equivalem a "+valorGal+" l");

//f. 
let valorXic = 450/3.52;
console.log("f. 450 xic equivalem a "+valorXic+" l");

//g.
const valor = prompt("Qual o valor em oz que você deseja converter para Kg?")
let valorOz2 = valor/35.274;
console.log("g. "+valor+" equivalem a "+valorOz2+" kg");