import React from 'react';
import Home from './Components/Home'
import UserCadastrados from './Components/UsersCadastrados'
import './App.css';
import axios from 'axios';
import styled from 'styled-components'
import UsersCadastrados from './Components/UsersCadastrados';

const Botao = styled.button`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
`;

class App extends React.Component {
  state = {
    usuarios: [
      {
        "id": "3f5bd645-1678-4cf2-bcfe-e077b4d9bfb3",
        "name": "Nathalia"
    },
    {
        "id": "c3f3d598-076c-4f39-bc05-35e0724454f7",
        "name": "Nathalie"
    }
    ]
  };
  
  componentDidMount() {
    this.pegarUser()
  }

  pegarUser = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: "nathalia-costa-julian"
      }
    }).then((resposta) => {
      console.log(resposta)
    }).catch((error) => {
      console.log(error)
    })
}

render(){
  return (
    <div className="App">
      <Botao> --> </Botao>
      <Home/>
      <UsersCadastrados listaUsuarios={this.state.usuarios}/>
    </div>
  );
}
}

export default App;
