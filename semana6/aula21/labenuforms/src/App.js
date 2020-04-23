import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Etapa1 } from './components/etapa1';
import { Etapa2 } from './components/etapa2';
import { Etapa3 } from './components/etapa3';
import { Etapa4 } from './components/etapa4';

const button = styled.button`
  display: none;
`;

class App extends React.Component {
  state = {
    etapa: 1,
  }
  renderizaEtapa = () => {
    const estado = this.state.etapa

    switch (estado) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Etapa4 />;
    }
  }
  irParaProximaEtapa = () => {
    const etapaAtual = this.state.etapa;
    const proximaEtapa = etapaAtual <= 3 ? etapaAtual + 1 : 'hidden';
    this.setState({ etapa: proximaEtapa });
  };
  render() {

    return (
      <div className={"App"}>
        {this.renderizaEtapa()}
        <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
      </div>
    );
  }
}

export default App;
