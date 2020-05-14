import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Cards, ImgCard, Pessoa, Descrição } from '../Styled';



function Card() {
  const [listaDePessoas, setListaDePessoas] = useState([]);

  useEffect(() => {
    pegarPessoa()
  }, []);

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
  console.log(listaDePessoas);

  return (
    <Cards>
        <ImgCard src={listaDePessoas.photo} />
        <Pessoa>{listaDePessoas.name} - {listaDePessoas.age}</Pessoa>
        <Descrição>{listaDePessoas.bio}</Descrição>
    </Cards>
  );
}

export default Card;