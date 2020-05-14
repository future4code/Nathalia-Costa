import React, { useState, useEffect } from 'react';
import axios from "axios";
import { TelaContainer, Buttons } from '../Styled';
import Card from './Cards';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';



function TelaPrincipal() {
  return (
    <TelaContainer>
      <Card />
      <Buttons>
        <Fab aria-label="like">
          <FavoriteIcon fontSize="large" />
        </Fab>
        <Fab aria-label="deslike">
          <CloseIcon fontSize="large" />
        </Fab>
      </Buttons>
    </TelaContainer>
  );
}

export default TelaPrincipal;