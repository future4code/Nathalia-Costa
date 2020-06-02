import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";


describe('Renderização inicial', () => {
    test('Input  existe na tela', () =>{
        const {getByPlaceholderText} = render(<App/>)
        expect(getByPlaceholderText('Novo post')).toBeInTheDocument()
    })
    test('Botao existe na tela', () =>{
        const {getByText} = render(<App/>);

        expect(getByText('Adicionar')).toBeInTheDocument()
    })
})


// 1. O usuário deve poder criar um novo post. Para isso, ele deve digitar no input cujo placeholder é "Novo post", 
// e clicar no botão "Adicionar". Quando ele faz isso, um novo item é adicionado à lista de posts.

describe('', () => {
    test('Criar um novo post', () => {
        const {getByPlaceholderText} = render(<App/>)

        const input = getByPlaceholderText('Novo post')

        fireEvent.change(input, {
            target: {
                value: 'tarefa teste'
            }
        })

        const button = getByText(/Adicionar/)

        fireEvent.click(button)
        expect(input).toHaveValue('tarefa teste')
    })
})



// 2. O usuário deve poder curtir um post. Isso é feito clicando no botão "Curtir" em um post. 
// Quando isso é feito, o botão que foi clicado deve trocar seu texto para "Descurtir".

describe('', () => {
    test('', () => {
        const {getByPlaceholderText} = render(<App/>)
    })
})

// 3. O usuário deve poder apagar um post. Isso é feito clicando no botão "Apagar" em um post. 
// Quando isso é feito, o respectivo post deve sumir da tela.

describe('', () => {
    test('', () => {
        const {getByPlaceholderText} = render(<App/>)
    })
})