import React from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
// import imagem from './astromatch.png';

const TelaContainer = styled.div`
height: 100%;
width: 75%;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
`;
const Buttons = styled.div`
height: 100%;
width: 20%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`;
const Cards = styled.div`
height: 75%;
width: 75%;
display: flex;
justify-content: center;
background: #dcdcdc;
border-radius: 20px;
`;
const Img = styled.img`
  height: 20%;
  width: 15%;
`;

function TelaPrincipal() {
  return (
    <TelaContainer>
      <Cards>
        
      </Cards>
      <Buttons>
        <Fab aria-label="like">
          <FavoriteIcon fontSize="large"/>
        </Fab>
        <Fab aria-label="deslike">
          <CloseIcon fontSize="large"/>
        </Fab>
      </Buttons>
    </TelaContainer>
  );
}

export default TelaPrincipal;