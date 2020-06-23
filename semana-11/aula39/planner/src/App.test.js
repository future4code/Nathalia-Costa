import React from "react";
import {
  render,
  fireEvent,
  wait
} from "@testing-library/react";
import App from "./App";
import axios from 'axios'
import userEvent from '@testing-library/user-event'

axios.get = jest.fn().mockResolvedValue({
  data: [{
    id: 123,
    text: 'tarefa teste',
    day: 'terça'
  }]
});
axios.post = jest.fn().mockResolvedValue()

// const criarTarefa = () => {
//   const utils = render(<App/>)
//   const input = utild.getByPlaceholderText('Digite sua tarefa')

//   fireEvent.change(input, {
//     target: {
//       value: 'tarefa teste 2'
//     }
//   })

//   const button = utils.getByText('Adicionar Tarefa')
//   fireEvent.click(button)

//   return utils
// }

describe('Renderização inicial', () => {
  test('Renderizando page', async () =>{
    axios.get = jest.fn().mockResolvedValue({
      data: [{
        id: 12345,
        text: 'teste renderizacao',
        day: 'quarta'
      }]
    });

    const { getByPlaceholderText, findByText, getByText, getByLabelText } = render(<App/>)

    const input = getByPlaceholderText('Digite uma tarefa')
    expect(input).toBeInTheDocument()

    const select = getByLabelText('Dia da semana')
    userEvent.selectOptions(select, getByText('Quarta'))

    expect(getByText('Adicionar Tarefa')).toBeInTheDocument()
    expect(axios.get).toHaveBeenCalled()

    const tarefa = await findByText('teste renderizacao')

    expect(tarefa).toBeInTheDocument()
  })
})

// describe('Criar uma tarefa', () => {
//   // test('Criando uma tarefa', async () =>{
//   //   axios.get = jest.fn().mockResolvedValue({
//   //     data: [{
//   //       id: 1234567,
//   //       text: 'teste criar tarefa',
//   //       day: 'quinta'
//   //     }]
//   //   });

//   //   axios.post = jest.fn().mockResolvedValue()

//   //   const { getByPlaceholderText, getByText, getByLabelText } = render(<App/>)

//   //   //Escrever no input
//   //   const input = getByPlaceholderText('Digite sua tarefa')
//   //   await userEvent.type(input, 'teste criar tarefa')
//   //   expect(input).toHaveValue('teste criar tarefa')

//   //   //Selecionar opção no select
//   //   const select = getByLabelText('Dia da semana')
//   //   userEvent.selectOptions(select, getByText('Quinta'))

//   //   //Clique para adicionar
//   //   const button = getByText('Adicionar Tarefa')
//   //   userEvent.click(button)

//   //   expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-nathalia', {
//   //     day:'quinta',
//   //     text: 'teste criar tarefa'
//   //   })
    
//   //   await wait(() => expect(axios.get).toHaveBeenCalledTimes(1))
//   //   await wait(() => expect(input).toHaveValue(''))
//   // })
//   // test('Funcionamento do Select', async () =>{
//     // axios.get = jest.fn().mockResolvedValue({
//     //   data: [{
//     //     id: 1234567,
//     //     text: 'teste criar tarefa',
//     //     day: 'quinta'
//     //   }]
//     // });

//     // axios.post = jest.fn().mockResolvedValue()

//     // const { getByPlaceholderText, getByText, getByLabelText } = render(<App/>)

//     // //Escrever no input
//     // const input = getByPlaceholderText('Digite sua tarefa')
//     // await userEvent.type(input, 'teste criar tarefa')
//     // expect(input).toHaveValue('teste criar tarefa')

//     // //Selecionar opção no select
//     // const select = getByLabelText('Dia da semana')
//     // userEvent.selectOptions(select, getByText('Quinta'))

//     // //Clique para adicionar
//     // const button = getByText('Adicionar Tarefa')
//     // userEvent.click(button)

//     // expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-nathalia', {
//     //   day:'quinta',
//     //   text: 'teste criar tarefa'
//     // })
    
//     // await wait(() => expect(axios.get).toHaveBeenCalledTimes(1))
//     // await wait(() => expect(select).toHaveValue('Quinta'))
//   })