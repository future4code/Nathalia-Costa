import React, { useState, useEffect } from 'react';
import { BodyContainer, FormAdicionarTarefa, TitleDia, SectionDiasDaSemana, ArticleDia } from './components/styled'
import axios from 'axios';

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



function App() {
  const [tarefa, setTarefa] = useState('');
  const [diaDaSemana, setDiaDaSemana] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const onChangeTarefa = (ev) => {
    setTarefa(ev.target.value)
    console.log(ev.target.value)
  };
  const onChangeDiaDaSemana = (ev) => {
    setDiaDaSemana(ev.target.value)
    console.log(ev.target.value)
  };
  const mostrarTarefas = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-nathalia')
      .then(resposta => {
        console.log(resposta.data)
        setListaTarefas(resposta.data)
      })
  };

  const onClickAddTarefa = () => {
    const body = {
      text: tarefa,
      day: diaDaSemana
    };
    if (tarefa === '' && diaDaSemana === '') {
      alert('Campo tarefa em branco')
    } else {
      axios.post('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-nathalia', body)
        .then(resposta => {
          console.log(resposta.data)
        })
    }

  };

  useEffect(() => {
    mostrarTarefas()
  }, []);

  const segunda = listaTarefas.filter(opcao => {
    return opcao.day === "Segunda"
  });
  
  const terca = listaTarefas.filter(opcao => {
    return opcao.day === "Terca"
  });
  const quarta = listaTarefas.filter(opcao => {
    return opcao.day === "Quarta"
  });
  const quinta = listaTarefas.filter(opcao => {
    return opcao.day === "Quinta"
  });
  const sexta = listaTarefas.filter(opcao => {
    return opcao.day === "Sexta"
  });
  const sabado = listaTarefas.filter(opcao => {
    return opcao.day === "Sabado"
  });
  const domingo = listaTarefas.filter(opcao => {
    return opcao.day === "Domingo"
  });

  return (
    <BodyContainer>
      <h1>Planejamento Semanal</h1>
      <FormAdicionarTarefa>
        <input type="text" placeholder="Digite sua tarefa" onChange={onChangeTarefa} />
        <select placeholder="Dia da semana" onChange={onChangeDiaDaSemana}>
          <option value="" ></option>
          <option value="Segunda" >Segunda</option>
          <option value="Terca" >Terça</option>
          <option value="Quarta" >Quarta</option>
          <option value="Quinta" >Quinta</option>
          <option value="Sexta" >Sexta</option>
          <option value="Sabado" >Sábado</option>
          <option value="Domingo" >Domingo</option>
        </select>
        <button onClick={onClickAddTarefa}>Adicionar Tarefa</button>
        <button>Limpar Planner</button>
      </FormAdicionarTarefa>
      <SectionDiasDaSemana>
        <ArticleDia>
          <TitleDia>Segunda</TitleDia>
          {segunda.map((dia) => {
            return <ul key={dia.id}>{dia.text}</ul>
          })}
        </ArticleDia>
        <ArticleDia>
          <TitleDia>Terça</TitleDia>
          {terca.map((dia) => {
            return <ul key={dia.id}>{dia.text}</ul>
          })}
        </ArticleDia>
        <ArticleDia>
          <TitleDia>Quarta</TitleDia>
          {quarta.map((dia) => {
            return <ul key={dia.id}>{dia.text}</ul>
          })}
        </ArticleDia>
        <ArticleDia>
          <TitleDia>Quinta</TitleDia>
          {quinta.map((dia) => {
            return <ul key={dia.id}>{dia.text}</ul>
          })}
        </ArticleDia>
        <ArticleDia>
          <TitleDia>Sexta</TitleDia>
          {sexta.map((dia) => {
            return <ul key={dia.id}>{dia.text}</ul>
          })}
        </ArticleDia>
        <ArticleDia>
          <TitleDia>Sábado</TitleDia>
          {sabado.map((dia) => {
            return <ul key={dia.id}>{dia.text}</ul>
          })}
        </ArticleDia>
        <ArticleDia>
          <TitleDia>Domingo</TitleDia>
          {domingo.map((dia) => {
            return <ul key={dia.id}>{dia.text}</ul>
          })}
        </ArticleDia>
      </SectionDiasDaSemana>
    </BodyContainer>
  );
}

export default App;