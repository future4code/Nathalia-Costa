// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. 
// Tente atribuir um número a esta variável. O que acontece?
// VS - O tipo 10 não pode ser atribuido ao tipo string. 
// terminal - Cannot redeclare block-scoped variable 'minhaString'

// const minhaString: string = "dez"
// const minhaString = 10

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. 
// Como podemos fazer com que essa variável aceite letras?
// alterando o tipo dela ou adicionando mais de um tipo
// const meuNumero: any = 'abc'
// const meuNumero: number | string = 'abc'
// const meuNumero: number | string = 321

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.

// Como você faria para garantir que o objeto só tenha as propriedades necessárias? 
// Faça a tipagem do objeto para que ele só aceite os valores acima.
type pessoa = {
    nome: string;
    idade: number;
    corFavorita: string;
}
// d) Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
// Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
// const nath: pessoa = {
//     nome: 'nath',
//     idade: 24,
//     corFavorita: 'verde'
// }
// const caio: pessoa = {
//     nome: 'caio',
//     idade: 31,
//     corFavorita: 'preto'
// }
// const gabi: pessoa = {
//     nome: 'gabi',
//     idade: 12,
//     corFavorita: 'laranja'
// }
// e) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. 
// Use um `enum` para isso.

enum ArcoIris {
    violeta = "violeta",
    anil = "anil",
    azul = "azul",
    verde = "verde",
    amarelo = "amarelo",
    laranja = "laranja",
    vermelho = "vermelho"
}
const nath: pessoa = {
    nome: 'nath',
    idade: 24,
    corFavorita: ArcoIris.verde
}
const caio: pessoa = {
    nome: 'caio',
    idade: 31,
    corFavorita: ArcoIris.azul
}
const gabi: pessoa = {
    nome: 'gabi',
    idade: 12,
    corFavorita: ArcoIris.laranja
}