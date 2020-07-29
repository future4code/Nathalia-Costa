"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var conta_1 = require("./conta");
var JSONFileManager_1 = require("./JSONFileManager");
var nome = process.argv[2];
var cpf = process.argv[3];
var idade = process.argv[4];
var criarConta = new conta_1.conta(nome, cpf, idade);
var fileManager = new JSONFileManager_1.JSONFileManager('baseDados.json');
var bancoDeContas = fileManager.getObjectFromFile();
bancoDeContas.push(criarConta);
fileManager.writeObjectToFile(bancoDeContas);
console.log("Sucesso!");