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
`;

const BotaoDeletar = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 10px;
`;

class UsersCadastrados extends React.Component {

    render() {
        const usuario = this.props.listaUsuarios.map(user => {
            return (
                <Linha>
                    <p>{user.name}</p>
                    <BotaoDeletar>X</BotaoDeletar>
                </Linha>

            )
        })

        return (
            <DivLinha>
                <h2>Users</h2>
                {usuario}
            </DivLinha>
        );
    }
}

export default UsersCadastrados;