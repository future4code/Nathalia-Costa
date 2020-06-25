"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale('pt-br');
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
function mostrarEventos(arrayEv) {
    arrayEv.forEach((ev) => {
        const duracao = ev.termino.diff(ev.inicio, "minutes");
        const hoje = moment_1.default();
        const tempo = ev.inicio.diff(hoje, "days");
        console.log(`
        Nome: ${ev.nome}
        Horário de início: ${ev.inicio.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
        Horário de fim: ${ev.termino.format("DD [de] MMMM [de] YYYY, HH:mm")}
        Descrição: ${ev.descricao}
        Duração: ${duracao} minutos
        Dias até o evento: ${tempo}`);
    });
}
;
mostrarEventos(TodosOsEventos);
const CriarEvento = (nome, descricao, inicio, termino) => {
    if (!nome || !descricao || !inicio || !termino) {
        console.error('Erro, tente novamente.');
        return;
    }
    const diffStartAtAndToday = inicio.diff(moment_1.default(), "seconds");
    const diffFinishAtAndToday = termino.diff(moment_1.default(), "seconds");
    if (diffStartAtAndToday < 0 && diffFinishAtAndToday < 0) {
        console.log("Essa data já passou, acho que você tá atrasad@.");
        return;
    }
    TodosOsEventos.push({
        nome,
        descricao,
        inicio,
        termino,
    });
};
//# sourceMappingURL=index.js.map