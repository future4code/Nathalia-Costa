import React, { useState, useEffect } from "react";
import {
    RequestContainer,
    RequestCard,
    InformacoesCard,
    ButtonsCard,
    ButtonRequest
  } from "../styled";
import { useHistory } from "react-router-dom";
import NavAdmin from "../AdminPage/NavAdmin";
import axios from "axios";

const RequestsPage = () => {
  const [resquestValue, setResquest] = useState('');

  const onClickRequest = event => {
   setResquest(event.target.value)
  }
  const history = useHistory();

  useEffect(() => {
    const body = {
      approve: resquestValue
    };

    // axios
    //     .put(
    //     `https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian/trips/NoIFVcOiSgTKTIPVZwXS/candidates/DYmdG4XpVVjKY1SEfVH2/decide`,
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
  }, [history]);


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
        <ButtonRequest onClickRequest={onClickRequest} value={false}>RECUSAR</ButtonRequest>
      </ButtonsCard>
    </RequestCard>
  </RequestContainer>
  );
};

export default RequestsPage;
