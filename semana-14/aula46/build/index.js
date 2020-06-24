"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale("pt-br");
const TodosOsEventos = [
    {
        nome: "São João",
        descricao: "Festa junina",
        inicio: moment_1.default("23/06/2020 18:00", "DD/MM/YYYY HH:mm"),
        termino: moment_1.default("24/06/2020 02:00", "DD/MM/YYYY HH:mm")
    },
    {
        nome: "Natal",
        descricao: "Festa natalina",
        inicio: moment_1.default("24/12/2020 20:00", "DD/MM/YYYY HH:mm"),
        termino: moment_1.default("25/12/2020 23:00", "DD/MM/YYYY HH:mm")
    }
];
console.log(TodosOsEventos);
//# sourceMappingURL=index.js.map