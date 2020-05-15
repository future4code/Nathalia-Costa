import React from 'react';
import { TelaContainer, Buttons, Cards, ImgCard, Pessoa, Descrição } from '../Styled';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';


function TelaPrincipal(props) {

  return (
    <TelaContainer>
      <Cards>
        <ImgCard src={props.urlImagem} />
        <Pessoa>{props.nome} - {props.idade}</Pessoa>
        <Descrição>{props.descricao}</Descrição>
      </Cards>
      <Buttons>
        <Fab aria-label="like" onClick={props.onClickLike}>
          <FavoriteIcon fontSize="large" />
        </Fab>
        <Fab aria-label="deslike">
          <CloseIcon fontSize="large" onClick={props.onClickDeslike}/>
        </Fab>
      </Buttons>
    </TelaContainer>
  );
}

export default TelaPrincipal;