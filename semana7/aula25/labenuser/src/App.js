import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  state = {
    usuarios: []
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
      {this.state.usuarios.map(user => {
        return <p>{user.name}</p>
      })}
    </div>
  );
}
}

export default App;
