import moment from "moment";
moment.locale('pt-br');

// EXERCICIO 01
type evento = {
    nome: string,
    descricao: string,
    inicio: moment.Moment,
    termino: moment.Moment
};

const TodosOsEventos: evento[] = [
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

// EXERCICIO 02
// A --
function mostrarEvento(arrayEv: evento[]) {
    arrayEv.forEach((ev: evento) => {
        return(
            console.log(`
            Nome: ${ev.nome}
            Horário de início: ${ev.inicio.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
            Horário de fim: ${ev.termino.format("DD [de] MMMM [de] YYYY, HH:mm")}
            Descrição: ${ev.descricao}`)
        );
    });
};
mostrarEvento(TodosOsEventos);

// B -- USAR utcOffset("FUSO-HORARIO");