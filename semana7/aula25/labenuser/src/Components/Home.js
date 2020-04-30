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
    justify-self: center;
`;

class Home extends React.Component {
    state = {
        nameValue: "",
        emailValue: ""
    };

    onChangeName = event => {
        this.setState({ nameValue: event.target.value });
    };

    onChangeEmail = event => {
        this.setState({ emailValue: event.target.value });
    };

    onClickCriarUser = () => {

        const body = {
            name: this.state.nameValue,
            email: this.state.emailValue
        };
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
                Authorization: "nathalia-costa-julian"
            }
        }).then(resposta => {
            window.alert("Usuário criado com sucesso!");
        }).catch(error => {
            console.log(error.response);
            window.alert("Erro ao criar usuário!")
        });

        this.setState({ nameValue: '', emailValue: '' })
    };

    render() {

        return (
            <div>
                <h1>Home</h1>
                <DivHome>
                    <label>Nome: </label>
                    <input placeholder={'Nome'} onChange={this.onChangeName} value={this.state.nameValue}></input>
                    <label>Email: </label>
                    <input placeholder={'Email'} onChange={this.onChangeEmail} value={this.state.emailValue}></input>
                    <BotaoSalvar onClick={this.onClickCriarUser}>Salvar</BotaoSalvar>
                </DivHome>
            </div>
        );
    }
};

export default Home;
