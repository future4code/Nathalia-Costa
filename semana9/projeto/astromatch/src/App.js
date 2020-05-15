import React, { useState, useEffect } from 'react';
import {AppContainer} from './components/Styled';
import axios from 'axios';

import Nav from './components/NavBar/Nav';
import TelaPrincipal from './components/TelaInicial/TelaPrincipal';
import Matches from './components/Matches/Matches';

function App() {
  const [secaoAtual, setSecaoAtual] = useState('Tela Principal');
  const [like, setLike] = useState();
  const [listaDePessoas, setListaDePessoas] = useState([]);
  const [listaDeMatch, setListaDeMatch] = useState([]);
  const [resetarMatches, setResetarMatches] = useState()

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
      choice: true
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
        pegarPessoa(setListaDePessoas)
        console.log("Click ", response.data.isMatch);
      })
      .catch((error) => {
        console.log("Deu erro ", error.response);
      });
  };
  
  const mostrarMatch = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nathalia-julian/matches"
      )
      .then((response) => {
        setListaDeMatch(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickResetar = () => {
    const body = {
      id: listaDeMatch.id
    }
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nathalia-julian/clear",
        body, 
        {
          header: {'Content-Type': 'application/json'}
        }
      )
      .then((response) => {
        setResetarMatches(response.data.matches);
        mostrarMatch(setListaDeMatch);
        alert(response.data.message)
      })
      .catch((error) => {
        console.log(error);
      });
      
  };

  useEffect(() => {
    pegarPessoa(setListaDePessoas);
    mostrarMatch()
  }, [setListaDeMatch]);

  return (
    <AppContainer>
      <Nav
      key={Nav}
      onClickResetar={onClickResetar}
      onClick={onClickPage}
      textButton={secaoAtual === 'Tela Principal' ? "Ver Matches" : "Tela Principal"}
      />
      {secaoAtual === 'Tela Principal' ? 
      (<TelaPrincipal 
        key={TelaPrincipal}
        onClickLike={()=> onClickLike(listaDePessoas.id, true)}
        onClickDeslike={()=> onClickLike(listaDePessoas.id, false)}
        urlImagem={listaDePessoas.photo}
        nome={listaDePessoas.name}
        idade={listaDePessoas.age}
        descricao={listaDePessoas.bio}
        />) : 
      (<Matches 
        key={Matches}
        listaDeMatch={listaDeMatch}/>)}
    </AppContainer>
  );
}

export default App;
