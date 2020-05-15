import React from 'react';
import { MatchesContainer, CardChips, CardMatch, ImgMatch,} from '../Styled';

function Matches(props) {
  return (
    <MatchesContainer>
        <CardChips>
          {props.listaDeMatch.map(pessoa => {
            return (
              <CardMatch>
                <ImgMatch src={pessoa.photo}/>
                <p>{pessoa.name}</p>
              </CardMatch>
            )
            })
          }
        </CardChips>
    </MatchesContainer>
  );
}

export default Matches;