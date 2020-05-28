import React, { useState, useEffect } from "react";
import {
    RequestContainer,
    RequestCard,
    InformacoesCard,
    ButtonsCard,
    ButtonRequest
  } from "../styled";
import { useHistory } from "react-router-dom";
import axios from "axios";

const RequestsPage = () => {
  const [resquestValue, setResquest] = useState('');

  const onClickRequest = event => {
   setResquest(event.target.value)
  }
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/");
    };

    const body = {
      approve: resquestValue
    };

    // axios
    //     .put(
    //     `https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian/trips/${idViagem}/candidates/${id}/decide`,
    //     body,
    //     {
    //         headers: {'Content-Type': 'application/json', 'auth': `${token}`}
    //     })
    //     .then(resposta => {
    //         console.log(resposta.data);
    //     })
    //     .catch(error => {
    //         alert("Erro");
    //         console.log("Deu erro", error);
    //     });
  }, [history, resquestValue]);


  return (
    <RequestContainer>
    <h1>Requests Page</h1>
    <RequestCard>
      <InformacoesCard>
        <p>Nome, idade</p>
        <p>Profissão</p>
        <p>Pais</p>
        <p>Mensagem</p>
      </InformacoesCard>
      <ButtonsCard>
        <ButtonRequest onClick={onClickRequest} value={true}>ACEITAR</ButtonRequest>
        <ButtonRequest value={false}>RECUSAR</ButtonRequest>
      </ButtonsCard>
    </RequestCard>
  </RequestContainer>
  );
};

export default RequestsPage;
