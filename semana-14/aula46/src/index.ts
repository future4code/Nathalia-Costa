import moment from "moment"
moment.locale("pt-br");

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
]

// function mostrarEvento(nome: string, horarioInicial: moment.Moment, horarioTermino: moment.Moment, descricao: string){
//     console.log("Nome: ", nome);
//     console.log("Horário de início: ", horarioInicial.format("dddd, DD/MMMM/YYYY, HH:mm"));
//     console.log("Horário de fim: ", horarioTermino.format("DD/MMMM/YYYY, HH:mm"));
//     console.log("Descrição: ", descricao);
// }
function mostrarEvento(nome: string, horarioInicial: moment.Moment, horarioTermino: moment.Moment, descricao: string){
    console.log("Nome: ", nome);
    console.log("Horário de início: ", horarioInicial.format("dddd, DD/MMMM/YYYY, HH:mm"));
    console.log("Horário de fim: ", horarioTermino.format("DD/MMMM/YYYY, HH:mm"));
    console.log("Descrição: ", descricao);
}