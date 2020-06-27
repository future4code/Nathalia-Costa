"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function criarConta(nome, cpf, nascimento) {
    const usuariosFilePath = "C:/Users/Larissa/Downloads/Repositório - GitHub/Nathalia-Costa/semana-14/projeto/src/usuarios.json";
    const usuariosFileData = fs_1.default.readFileSync(usuariosFilePath);
    const usuariosString = usuariosFileData.toString();
    console.log(usuariosString);
    const usuarios = JSON.parse(usuariosString);
    usuarios.push({
        nome: nome,
        nascimento: nascimento,
        cpf: cpf,
        saldoAtual: 0,
        extrato: []
    });
    console.log(usuarios);
    const usuariosJson = JSON.stringify(usuarios, null, 2);
    fs_1.default.writeFileSync(usuariosFilePath, usuariosJson);
}
;
criarConta('Nathalia', '10/07/1995', '444.555.555-44');
//# sourceMappingURL=index.js.map