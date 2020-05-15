import React, { useState, useEffect } from 'react';
import axios from "axios";
import { MatchesContainer, MatchesDiv, CardChips, CardMatch, ImgMatch, ButtonResetar } from '../Styled';
import Fab from '@material-ui/core/Fab';

function Matches() {
  const [listaDeMatch, setlistaDeMatch] = useState([]);
  const [resetarMatches, setResetarMatches] = useState()

  const mostrarMatch = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/nathalia-julian/matches"
      )
      .then((response) => {
        setlistaDeMatch(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickResetar = () => {
    const body = {
      id: ''
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
        setResetarMatches(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    mostrarMatch()
  }, []);
  
  return (
    <MatchesContainer>
      <MatchesDiv>
        <CardChips>
          {listaDeMatch.map(pessoa => {
            return (
              <CardMatch>
                <ImgMatch src={pessoa.photo}/>
                <p>{pessoa.name}</p>
              </CardMatch>
            )
          })}
        </CardChips>
      </MatchesDiv>
      <ButtonResetar>
        <Fab variant="extended" onClick={onClickResetar}>
          Resetar
        </Fab>
      </ButtonResetar>
    </MatchesContainer>
  );
}

export default Matches;