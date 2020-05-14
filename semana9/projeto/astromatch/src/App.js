import React, { useState, useEffect } from 'react';
import {AppContainer} from './components/Styled';
import axios from 'axios';

import Nav from './components/NavBar/Nav';
import TelaPrincipal from './components/TelaInicial/TelaPrincipal';
import Matches from './components/Matches/Matches';

function App() {
  const [secaoAtual, setSecaoAtual] = useState('Tela Principal');
  
  const onClickPage = () => {
    const nextPage = secaoAtual === 'Tela Principal' ? 'Match' : 'Tela Principal';
    setSecaoAtual(nextPage);
  };

  return (
    <AppContainer>
      <Nav 
      onClick={onClickPage}
      textButton={secaoAtual === 'Tela Principal' ? "Tela Principal" : "Ver Matches"}
      />
      {secaoAtual === 'Tela Principal' ? (<Matches />) : (<TelaPrincipal />)}
    </AppContainer>
  );
}

export default App;
