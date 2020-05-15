import React, { useState, useEffect } from 'react';
import {AppContainer} from './components/Styled';
import axios from 'axios';

import Nav from './components/NavBar/Nav';
import TelaPrincipal from './components/TelaInicial/TelaPrincipal';
import Matches from './components/Matches/Matches';

function App() {
  const [secaoAtual, setSecaoAtual] = useState('Tela Principal');
  const [like, setLike] = useState(true);
  const [listaDePessoas, setListaDePessoas] = useState([]);

  const onClickPage = () => {
    const nextPage = secaoAtual === 'Tela Principal' ? 'Match' : 'Tela Principal';
    setSecaoAtual(nextPage);
  };

  //Atulizar card
  const pegarPessoa = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nathalia-julian/person"
      )
      .then((response) => {
        setListaDePessoas(response.data.profile);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickLike = () => {
    const body = {
      id: listaDePessoas.id,  
      choice: like
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nathalia-julian/choose-person", 
        body, 
        {
          headers: {'Content-Type': 'application/json'}
        }
      )
      .then((response) => {
        setLike(response.data.isMatch)
        pegarPessoa()
        console.log("Deu certo ", response.data.isMatch);
      })
      .catch((error) => {
        console.log("Deu erro ", error.response);
      });
  };
  
  useEffect(() => {
    pegarPessoa(setListaDePessoas)
  }, [setListaDePessoas]);

  return (
    <AppContainer>
      <Nav 
      onClick={onClickPage}
      textButton={secaoAtual === 'Tela Principal' ? "Ver Matches" : "Tela Principal"}
      />
      {secaoAtual === 'Tela Principal' ? 
      (<TelaPrincipal 
        onClickLike={()=> onClickLike(listaDePessoas.id, true)}
        onClickDeslike={()=> onClickLike(listaDePessoas.id, false)}
        urlImagem={listaDePessoas.photo}
        nome={listaDePessoas.name}
        idade={listaDePessoas.age}
        descricao={listaDePessoas.bio}
        />) : 
      (<Matches />)}
    </AppContainer>
  );
}

export default App;
