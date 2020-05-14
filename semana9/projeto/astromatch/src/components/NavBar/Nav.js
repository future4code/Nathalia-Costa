import React from 'react';
import { NavContainer, BoxTop, Logo, BoxBottom, ButtonVerMatches} from '../Styled'

import Perfil from './Perfil';
import Imagem from './logo/astromatch.png';

function Nav(props) {
  return (
    <NavContainer>
      <BoxTop>
        <Logo src={Imagem} />
        <Perfil />
      </BoxTop>
      <BoxBottom>
        <ButtonVerMatches variant="extended" onClick={props.onClick} >
          {props.textButton}        
        </ButtonVerMatches>
      </BoxBottom>
    </NavContainer>
  );
}

export default Nav;
