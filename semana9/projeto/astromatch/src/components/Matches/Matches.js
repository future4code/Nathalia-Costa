import React, { useState, useEffect } from 'react';
import axios from "axios";
import {MatchesContainer, MatchesDiv, CardChips, ButtonResetar} from '../Styled';
import Fab from '@material-ui/core/Fab';

function Matches() {
  // const [listaDeMatch, setlistaDeMatch] = useState([]);

  // useEffect(() => {
  //   mostrarMatch()
  // }, []);

  // const mostrarMatch = () => {
  //   axios
  //     .get(
  //       "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nathalia-julian/matches"
  //     )
  //     .then((response) => {
  //       setlistaDeMatch(response.data.matches);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // console.log(listaDeMatch);

  return (
    <MatchesContainer>
      <MatchesDiv>
        <CardChips>         
          <p></p>
        </CardChips>
      </MatchesDiv>
      <ButtonResetar>
        <Fab variant="extended">
          Resetar
        </Fab>
      </ButtonResetar>
    </MatchesContainer>
  );
}

export default Matches;