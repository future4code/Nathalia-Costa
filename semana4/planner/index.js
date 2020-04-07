function adicionarTarefa(){
    const nomeDaTarefa = document.getElementById("novaTarefa").value;
    document.getElementById("espacotexto").innerHTML += "<p>"+nomeDaTarefa+"</p>"
    
}
adicionarTarefa()


//como riscar tarefa
// function meRisca(coisaID){
//     console.log(coisaID);
//     coisaID.style.textDecoration = "line-through";
// }