import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const DivLinha = styled.div`
    display: grid;
    justify-content: center;
`;

const Linha = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const BotaoDeletar = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 10px;
`;


class Users extends React.Component {

    state = {
        usuarios: []
    };

    componentDidMount() {
        this.pegarUser();
    };

    pegarUser = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: "nathalia-costa-julian"
            }
        }).then((response) => {
            this.setState({ usuarios: response.data })
        }).catch((error) => {
            console.log(error.response)
        })
    };

    onClickDelete = userId => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
            headers: {
                Authorization: "nathalia-costa-julian"
            }
        }).then(response => {
            window.alert("Usuário deletado");
            this.pegarUser();
        }).catch(error => {
            window.alert("Deu erro");
        })
    }

    render() {
        const usuario = this.state.usuarios.map(user => {
            return (
                <Linha>
                    <p>{user.name}</p>
                    <BotaoDeletar onclick={() => this.onClickDelete(user.id)}>X</BotaoDeletar>
                </Linha>
            )
        });

        return (
            <DivLinha>
                <h2>USUÁRIOS</h2>
                {usuario}
            </DivLinha>
        );
    }
}

export default Users;