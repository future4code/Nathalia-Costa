"use strict";
const nome = process.argv[2];
const idade = Number(process.argv[3]);
const colors = require('colors');
function programa(nome, idade) {
    console.log(colors.blue(`Olá, ${nome}!`), colors.yellow(`Você tem ${idade} anos. Em sete anos você terá ${idade + 7}.`));
}
programa(nome, idade);
//# sourceMappingURL=index.js.map