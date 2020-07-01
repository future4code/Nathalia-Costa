"use strict";
// class Extrato { 
//     private valor: number
//     private data: string
//     private descricao: string
Object.defineProperty(exports, "__esModule", { value: true });
exports.conta = void 0;
// }
var conta = /** @class */ (function () {
    // {valor: number, data: string, descricao: string}
    function conta(nome, cpf, idade) {
        this.saldoAtual = 0;
        this.extrato = [];
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
    }
    //  Getters
    conta.prototype.getNome = function () {
        return this.nome;
    };
    conta.prototype.getCPF = function () {
        return this.cpf;
    };
    conta.prototype.getIdade = function () {
        return this.idade;
    };
    conta.prototype.getSaldoAtual = function () {
        return this.saldoAtual;
    };
    conta.prototype.getExtrato = function () {
        return this.extrato;
    };
    return conta;
}());
exports.conta = conta;
