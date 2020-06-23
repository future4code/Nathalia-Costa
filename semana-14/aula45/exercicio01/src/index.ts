//EXERCICIO 01

const nome: string = process.argv[2];
const idade = Number(process.argv[3]);

function programa(nome: string, idade: number){
    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade+7}.`)
}
programa(nome, idade)