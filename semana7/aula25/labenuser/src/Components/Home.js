import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const DivHome = styled.div`
    display: grid;
    gap: 8px;
    justify-content: center;
`;

const BotaoSalvar = styled.button`
    border-radius: 20px;
    width: 80px;
`;

class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>Home</h1>
                <DivHome>
                    <label>Nome: </label>
                    <input placeholder={'Nome'}></input>
                    <label>Email: </label>
                    <input placeholder={'Email'}></input>
                    <BotaoSalvar>Salvar</BotaoSalvar>
                </DivHome>
            </div>
        );
    }
}

export default Home;
