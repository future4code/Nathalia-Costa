import React, { useState } from 'react';
import { BodyContainer, SectionAdicionarTarefa, TitleDia, SectionDiasDaSemana, ArticleDia } from './components/styled'

// adicionarTarefa(){
//   const nomeDaTarefa = document.getElementById("novaTarefa").value;
//   const diasDaSemana = document.getElementById("diasDaSemana").value;
  
//   switch(diasDaSemana){
//       case 'SEG' :
//           document.getElementById("tarefaSegunda").innerHTML += "<li>"+nomeDaTarefa+"</li>";
//           break;
//       case 'TER' :
//           document.getElementById("tarefaTerca").innerHTML += "<li>"+nomeDaTarefa+"</li>";
//           break;
//       case 'QUA' :
//           document.getElementById("tarefaQuarta").innerHTML += "<li>"+nomeDaTarefa+"</li>";
//           break;
//       case 'QUI' :
//           document.getElementById("tarefaQuinta").innerHTML += "<li>"+nomeDaTarefa+"</li>";
//           break;
//       case 'SEX' :
//           document.getElementById("tarefaSexta").innerHTML += "<li>"+nomeDaTarefa+"</li>";
//           break;
//       case 'SAB' :
//           document.getElementById("tarefaSabado").innerHTML += "<li>"+nomeDaTarefa+"</li>";
//           break;
//       case 'DOM' :
//           document.getElementById("tarefaDomingo").innerHTML += "<li>"+nomeDaTarefa+"</li>";
//           break;
//   }
//   document.getElementById("novaTarefa").value = "";
// }

//limpar tarefas
// function limpar(){
//     document.getElementsById("tarefaSegunda").value = "";
// }

//como riscar tarefa
// function meRisca(coisaID){
//     console.log(coisaID);
//     coisaID.style.textDecoration = "line-through";
// }

function App() {
  const [tarefa, setTarefa] = useState([])
  const [diasDaSemana, setDiasDaSemana] = useState('')
 
  return (
    <BodyContainer>
        <h1>Planejamento Semanal</h1>
        <SectionAdicionarTarefa >
          <input type="text" placeholder="Digite sua tarefa" value={tarefa} />
            <select value={diasDaSemana}>
              <option id="seg" value="SEG">Segunda</option>
              <option id="ter" value="TER">Terça</option>
              <option id="qua" value="QUA">Quarta</option>
              <option id="qui" value="QUI">Quinta</option>
              <option id="sex" value="SEX">Sexta</option>
              <option id="sab" value="SAB">Sábado</option>
              <option id="dom" value="DOM">Domingo</option>
            </select>
            <button onclick="adicionarTarefa()" >Adicionar Tarefa</button>
            <button onclick="limpar()">Limpar Planner</button>
          </SectionAdicionarTarefa>
          <SectionDiasDaSemana>
            <ArticleDia>
              <TitleDia>Segunda</TitleDia>
              <ul class="tarefa" id="tarefaSegunda"></ul>
            </ArticleDia>
            <ArticleDia>
              <TitleDia>Terça</TitleDia>
              <ul class="tarefa" id="tarefaTerca"></ul>
            </ArticleDia>
            <ArticleDia>
              <TitleDia>Quarta</TitleDia>
              <ul class="tarefa" id="tarefaQuarta"></ul>
            </ArticleDia>
            <ArticleDia>
              <TitleDia>Quinta</TitleDia>
              <ul class="tarefa" id="tarefaQuinta"></ul>
            </ArticleDia>
            <ArticleDia>
              <TitleDia>Sexta</TitleDia>
              <ul class="tarefa" id="tarefaSexta"></ul>
            </ArticleDia>
            <ArticleDia>
              <TitleDia>Sábado</TitleDia>
              <ul class="tarefa" id="tarefaSabado"></ul>
            </ArticleDia>
            <ArticleDia>
              <TitleDia>Domingo</TitleDia>
              <ul class="tarefa" id="tarefaDomingo"></ul>
            </ArticleDia>
          </SectionDiasDaSemana>
      </BodyContainer>
  );
}

export default App;
