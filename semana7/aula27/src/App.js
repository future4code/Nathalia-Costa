import React from "react";
import "./styles.css";
import styled from "styled-components"
import axios from "axios";
import Filtro from "./Components/Filtro";

const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #87CEEB;
`;
const AtividadeContainer = styled.div`
  margin-top: 15px;
  border: 1px solid black;
`;

const Button = styled.button`
  margin-top: 15px;
  border-radius: 10px;
`;

export class App extends React.Component {
  state = {
    atividade: {}
  };

  componentDidMount = () => {
    this.geraAtividade();
  };

  geraAtividade = () => {
    axios
      .get("https://www.boredapi.com/api/activity/")
      .then(response => {
        console.log(response.data);
        this.setState({ atividade: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container className="App">
        <h1>The Bored API</h1>
        <p>A BoredAPI ajuda você a encontrar coisas para fazer quando está entediado!</p>
        <Filtro />
        <AtividadeContainer>
          <p>
            <strong>Atividade: </strong>
            {this.state.atividade.activity}
          </p>
          <p>
            <strong>Acessibilidade: </strong>
            {this.state.atividade.accessibility}
          </p>
          <p>
            <strong>Tipo: </strong>
            {this.state.atividade.type}
          </p>
          <p>
            <strong>Participantes necessários: </strong>
            {this.state.atividade.participants}
          </p>
          <p>
            <strong>Preço: </strong>
            {this.state.atividade.price}
          </p>
        </AtividadeContainer>
        <Button onClick={this.geraAtividade}>Gera atividade</Button>
      </Container>
    );
  }
}

export default App;
