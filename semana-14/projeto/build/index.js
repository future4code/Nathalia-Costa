"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const fs_1 = __importDefault(require("fs"));
function criarConta(nome, nascimento, cpf) {
    const dataNasc = moment_1.default(nascimento, "DD/MM/YYYY");
    const hoje = moment_1.default();
    const idade = hoje.diff(dataNasc, "years");
    if (idade < 18) {
        console.log("Necessário que o usuário tenha mais de 18 anos");
        return;
    }
    ;
    const usuariosFilePath = "C:/Users/Larissa/Downloads/Repositório - GitHub/Nathalia-Costa/semana-14/projeto/src/usuarios.json";
    const usuariosFileData = fs_1.default.readFileSync(usuariosFilePath);
    const usuariosString = usuariosFileData.toString();
    const usuarios = JSON.parse(usuariosString);
    const foundUser = usuarios.find((usuario) => {
        return usuario.cpf === cpf;
    });
    if (foundUser !== undefined) {
        console.log("CPF já cadastrado");
        return;
    }
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
const nome = process.argv[2];
const cpf = process.argv[3];
const nascimento = process.argv[4];
criarConta(nome, cpf, nascimento);
//# sourceMappingURL=index.js.map