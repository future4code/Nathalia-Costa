"use strict";
const nome = process.argv[2];
const idade = Number(process.argv[3]);
function programa(nome, idade) {
    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos vocÊ terá ${idade + 7}`);
}
programa(nome, idade);
//# sourceMappingURL=index.js.map