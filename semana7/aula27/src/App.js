import React from "react";
import "./styles.css";
import axios from "axios";

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
      <div className="App">
        <button onClick={this.geraAtividade}>Gera atividade</button>
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
      </div>
    );
  }
}

export default App;
