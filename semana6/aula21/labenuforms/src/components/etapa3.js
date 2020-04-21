import React from 'react';
import styled from 'styled-components';

export class Etapa3 extends React.Component {
    render() {
        return (
            <div className={"App"}>
                <div>
                    <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                    <div>
                        <h3>5. Por que você não concluiu a graduação?</h3>
                        <input></input>
                        <h3>6. Você fez algum curso complementar?</h3>
                        <select>
                            <option>Nenhum</option>
                            <option>Curso técnico</option>
                            <option>Curso de inglês</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}