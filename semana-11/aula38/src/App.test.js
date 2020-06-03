import React from "react";
import { render, fireEvent, getByText, getAllByTestId, getByTestId, queryAllByAltText, queryAllByText } from "@testing-library/react";
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

const criarPost = () => {
    const utils = render(<App/>)

        //Adicionar tarefa
        const input = utils.getByPlaceholderText('Novo post')

        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        })

        const button = utils.getByText('Adicionar')
        fireEvent.click(button)

    return utils
}

// 1. O usuário deve poder criar um novo post. Para isso, ele deve digitar no input cujo placeholder é "Novo post", 
// e clicar no botão "Adicionar". Quando ele faz isso, um novo item é adicionado à lista de posts.

// 2. O usuário deve poder curtir um post. Isso é feito clicando no botão "Curtir" em um post. 
// Quando isso é feito, o botão que foi clicado deve trocar seu texto para "Descurtir".

// 3. O usuário deve poder apagar um post. Isso é feito clicando no botão "Apagar" em um post. 
// Quando isso é feito, o respectivo post deve sumir da tela.

// EX1 - Funcionalidades existentes
describe('Funcionalidades ao criar post', () => {
    test('Criar um novo post', () => {
        const {getByPlaceholderText, getByText} = render(<App/>)

        const input = getByPlaceholderText('Novo post')
        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        })

        const button = getByText(/Adicionar/)
        fireEvent.click(button)
        expect(getByText(/post teste/)).toBeInTheDocument()
    });
    test('Curtir post', () => {
        const {getByText, getByTestId} = criarPost()

        // Clicar no button curtir
        const buttonCurtir = getByTestId('like-button')
        fireEvent.click(buttonCurtir)

        expect(getByText('Descurtir')).toBeInTheDocument()
    });
    test('Clicando no botão "Apagar"', () => {
        
        const {getByText, queryAllByText} = criarPost()

        const buttonApagar = getByText('Apagar')
        fireEvent.click(buttonApagar)

        expect(queryAllByText('post teste')).toHaveLength(0)
    })
});

//4. Quando o usuário cria um post, o input deve ser limpo.

//5. Quando a lista de posts está vazia (ou seja, no início), uma mensagem "Nenhum post" 
//deve aparecer na tela. Se pelo menos um post existe, a mensagem não deve aparecer.

describe('Implementar funcionalidades', () => {
    test('Limpar input após criar um post', () => {
        const {getByPlaceholderText, getByText} = render(<App/>)

        const input = getByPlaceholderText('Novo post')
        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        })

        const button = getByText(/Adicionar/)
        fireEvent.click(button)

        expect((input)).toHaveValue('')
    })
    test('Lista de  post vazia', () =>{
        const {getByText} = render(<App/>)

        expect(getByText('Nenhum post')).toBeInTheDocument()
    })
    test('Quantidade de post', () =>{
        const {getByText} = criarPost() 
        
        expect(getByText('Quantidade de post: 1')).toBeInTheDocument()
    })
    test('Quantidade de post, seja 02', () =>{
        const {getByPlaceholderText, getByText} = render(<App/>)

        //adicionando um post
        const input = getByPlaceholderText('Novo post')
        fireEvent.change(input, {
            target: {
                value: 'post teste'
            }
        })

        const button = getByText(/Adicionar/)
        fireEvent.click(button)

        //adicionando outro post
        const input2 = getByPlaceholderText('Novo post')
        fireEvent.change(input2, {
            target: {
                value: 'post teste2'
            }
        })

        const button2 = getByText(/Adicionar/)
        fireEvent.click(button2)
        
        expect(getByText('Quantidade de post: 2')).toBeInTheDocument()
    })
});