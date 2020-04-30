import React from 'react';
import Home from './Components/Home'
import Users from './Components/Users'
import './App.css';
import styled from 'styled-components'

const Botao = styled.button`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  width: 150px;
  height: 50px;
  text-align: center;
`;

class App extends React.Component {
  state = {
    currentPage: "HOME"
  };

  onClickNextPage = () => {
    const nextPage = this.state.currentPage === "HOME" ? "LIST" : "HOME";

    this.setState({ currentPage: nextPage });
  };

  render() {
    return (
      <div className="App">
        <Botao onClick={this.onClickNextPage}> --> Próxima Pagina</Botao>
        {this.state.currentPage === "HOME" ? <Home /> : <Users />}
      </div>
    );
  }
}

export default App;
