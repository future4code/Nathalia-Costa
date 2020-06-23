import React, { useState, useEffect } from 'react';
import { BodyContainer, FormAdicionarTarefa, TitleDia, SectionDiasDaSemana, ArticleDia, Button } from './components/styled'
import axios from 'axios';

function App() {
  const [tarefa, setTarefa] = useState('');
  const [diaDaSemana, setDiaDaSemana] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const onChangeTarefa = (ev) => {
    setTarefa(ev.target.value)
  };
  const onChangeDiaDaSemana = (ev) => {
    setDiaDaSemana(ev.target.value)
  };
  const mostrarTarefas = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-nathalia')
      .then(resposta => {
        setListaTarefas(resposta.data)
      })
  };
  const limparTarefas = (idApagar) => {
    const novaListaTarefas = listaTarefas.filter(objeto => {
      if (objeto.id === idApagar){
        return false;
      } else {
        return true;
      }
    });
    setListaTarefas(novaListaTarefas)
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
          setTarefa('')
          mostrarTarefas()
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
      <label htmlFor={'Digite sua tarefa'}>Digite sua tarefa:</label>
        <input type="text" placeholder="Digite sua tarefa" onChange={onChangeTarefa} required/>
        <label htmlFor={'Dia da semana'}>Dia da semana:</label>
        <select onChange={onChangeDiaDaSemana} id={'Dia da semana'} required>
          <option value="" ></option>
          <option value="Segunda" >Segunda</option>
          <option value="Terca" >Terça</option>
          <option value="Quarta" >Quarta</option>
          <option value="Quinta" >Quinta</option>
          <option value="Sexta" >Sexta</option>
          <option value="Sabado" >Sábado</option>
          <option value="Domingo" >Domingo</option>
        </select>
        <Button onClick={limparTarefas}>Limpar Planner</Button>
        <Button onClick={onClickAddTarefa}>Adicionar Tarefa</Button>
      </FormAdicionarTarefa>
      <SectionDiasDaSemana>
        <ArticleDia>
          <TitleDia>Segunda</TitleDia>
          {segunda.map((dia) => {
            return <ul key={dia.id} onClick={() => limparTarefas(dia.id)}>{dia.text}</ul>
          })}
        </ArticleDia>
        <ArticleDia>
          <TitleDia>Terça</TitleDia>
          {terca.map((dia) => {
            return <ul key={dia.id} onClick={() => limparTarefas(dia.id)}>{dia.text}</ul>
          })}
        </ArticleDia>
        <ArticleDia>
          <TitleDia>Quarta</TitleDia>
          {quarta.map((dia) => {
            return <ul key={dia.id} onClick={() => limparTarefas(dia.id)}>{dia.text}</ul>
          })}
        </ArticleDia>
        <ArticleDia>
          <TitleDia>Quinta</TitleDia>
          {quinta.map((dia) => {
            return <ul key={dia.id} onClick={() => limparTarefas(dia.id)}>{dia.text}</ul>
          })}
        </ArticleDia>
        <ArticleDia>
          <TitleDia>Sexta</TitleDia>
          {sexta.map((dia) => {
            return <ul key={dia.id} onClick={() => limparTarefas(dia.id)}>{dia.text}</ul>
          })}
        </ArticleDia>
        <ArticleDia>
          <TitleDia>Sábado</TitleDia>
          {sabado.map((dia) => {
            return <ul key={dia.id} onClick={() => limparTarefas(dia.id)}>{dia.text}</ul>
          })}
        </ArticleDia>
        <ArticleDia>
          <TitleDia>Domingo</TitleDia>
          {domingo.map((dia) => {
            return <ul key={dia.id} onClick={() => limparTarefas(dia.id)}>{dia.text}</ul>
          })}
        </ArticleDia>
      </SectionDiasDaSemana>
    </BodyContainer>
  );
}

export default App;