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
function mostrarEventos(arrayEv: evento[]) {
    arrayEv.forEach((ev: evento) => {
        const duracao = ev.termino.diff(ev.inicio, "minutes");
        const hoje = moment();
        const tempo = ev.inicio.diff(hoje, "days")
        console.log(`
        Nome: ${ev.nome}
        Horário de início: ${ev.inicio.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
        Horário de fim: ${ev.termino.format("DD [de] MMMM [de] YYYY, HH:mm")}
        Descrição: ${ev.descricao}
        Duração: ${duracao} minutos
        Dias até o evento: ${tempo}`)
    });
};
mostrarEventos(TodosOsEventos);

// B -- USAR utcOffset("FUSO-HORARIO");

// EXERCICIO 04
// const name: string = process.argv[2];
// const description: string = process.argv[3];
// const start: string = process.argv[4];
// const finish: string = process.argv[5];

const CriarEvento = (
    nome: string,
    descricao: string,
    inicio: moment.Moment,
    termino: moment.Moment
) : void => {
    if( !nome || !descricao || !inicio || !termino){
        console.error('Erro, tente novamente.')
        return
    }

    const diffStartAtAndToday = inicio.diff(moment(), "seconds");
    const diffFinishAtAndToday = termino.diff(moment(), "seconds");

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
}
