import { conta } from './conta';
import { JSONFileManager } from './JSONFileManager';

const nome: string = process.argv[2];
const cpf: string = process.argv[3];
const idade: number = process.argv[4];

const criarConta: conta = new conta(nome, cpf, idade);

const fileManager: JSONFileManager = new JSONFileManager('baseDados.json')
const bancoDeContas: any = fileManager.getObjectFromFile()

bancoDeContas.push(criarConta)

fileManager.writeObjectToFile(bancoDeContas)

console.log("Sucesso!")