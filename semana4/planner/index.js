function adicionarTarefa(){
    const nomeDaTarefa = document.getElementById("novaTarefa").value;
    const diasDaSemana = document.getElementById("diasDaSemana").value;
    
    switch(diasDaSemana){
        case 'SEG' :
            document.getElementById("tarefaSegunda").innerHTML += "<li>"+nomeDaTarefa+"</li>";
            break;
        case 'TER' :
            document.getElementById("tarefaTerca").innerHTML += "<li>"+nomeDaTarefa+"</li>";
            break;
        case 'QUA' :
            document.getElementById("tarefaQuarta").innerHTML += "<li>"+nomeDaTarefa+"</li>";
            break;
        case 'QUI' :
            document.getElementById("tarefaQuinta").innerHTML += "<li>"+nomeDaTarefa+"</li>";
            break;
        case 'SEX' :
            document.getElementById("tarefaSexta").innerHTML += "<li>"+nomeDaTarefa+"</li>";
            break;
        case 'SAB' :
            document.getElementById("tarefaSabado").innerHTML += "<li>"+nomeDaTarefa+"</li>";
            break;
        case 'DOM' :
            document.getElementById("tarefaDomingo").innerHTML += "<li>"+nomeDaTarefa+"</li>";
            break;
    }
    document.getElementById("novaTarefa").value = "";
}

//limpar tarefas
// function limpar(){
//     document.getElementsById("tarefaSegunda").value = "";
// }

//como riscar tarefa
// function meRisca(coisaID){
//     console.log(coisaID);
//     coisaID.style.textDecoration = "line-through";
// }