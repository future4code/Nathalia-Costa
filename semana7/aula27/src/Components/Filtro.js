import React from "react";
import styled from "styled-components";

const FiltroContainer = styled.div`
  margin-top: 15px;
  padding-bottom: 15px;
  border: 1px solid black;
`;
const Input = styled.input`
    width: 50px;
    border-radius: 10px;
    margin-right: 8px;
`;
const Select = styled.select`
    margin-top: 10px;
    border-radius: 10px;
`;
export class Filtro extends React.Component {
    state = {
        list: ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"],
        type: ""
    }

    render() {
        return (
            <FiltroContainer>
                <h4>Filtro</h4>
                <span>Participantes necessários: </span>
                <Input />
                <span>Tipo: </span>
                <Select>
                    <option value={""}>Nenhum</option>
                    {this.state.list.map(tipo => {
                        return (
                            <option key={tipo} value={tipo}>
                                {tipo}
                            </option>
                        );
                    })}
                </Select>
            </FiltroContainer>
        );
    }
}

export default Filtro;
