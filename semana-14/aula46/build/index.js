"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
moment.locale("pt-br");
const TodosOsEventos = [
    {
        nome: "São João",
        descricao: "Festa junina",
        inicio: moment("23/06/2020 18:00", "DD/MM/YYYY HH:mm"),
        termino: moment("24/06/2020 02:00", "DD/MM/YYYY HH:mm")
    },
    {
        nome: "Natal",
        descricao: "Festa natalina",
        inicio: moment("24/12/2020 20:00", "DD/MM/YYYY HH:mm"),
        termino: moment("25/12/2020 23:00", "DD/MM/YYYY HH:mm")
    }
];
console.log(TodosOsEventos);
//# sourceMappingURL=index.js.map