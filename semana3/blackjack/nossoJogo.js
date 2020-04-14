/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    let carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vindo ao jogo de Blackjack!")

let valorUsuario = 0;
let valorPc = 0;
let cartasUsuarios = "Usuário - cartas: ";
let cartasPc = "Computador - cartas: ";

if(confirm("Quer iniciar uma nova rodada?")) {
   for(let i = 0; i < 2; i++){
      let carta = comprarCarta();
      cartasUsuarios = cartasUsuarios + carta.texto;
      valorUsuario = valorUsuario + carta.valor;

      let carta2 = comprarCarta();
      cartasPc = cartasPc + carta2.texto;
      valorPc = valorPc + carta2.valor;
   }
   console.log(cartasUsuarios+" - Pontuação ", valorUsuario)
   console.log(cartasPc+" - Pontuação ", valorPc);
   if(valorUsuario > valorPc){
      console.log("O usuario ganhou")
   }
   else if(valorPc > valorUsuario){
      console.log("O computador ganhou")
   }
   else{
      console.log("Empate")
   }
}else {
   console.log("O jogo acabou.")
}