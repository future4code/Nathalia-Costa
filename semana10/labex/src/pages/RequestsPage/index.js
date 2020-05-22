import React, { useState, useEffect } from "react";
import {
  RequestContainer,
  RequestCard,
  InformacoesCard,
  ButtonsCard,
  ButtonRequest,
  Container
} from "../styled";
import { useHistory } from "react-router-dom";
import NavAdmin from "../AdminPage/NavAdmin";
import axios from "axios";

const RequestsPage = () => {
  const history = useHistory();

  const goToBack = () => {
    history.push("/logado");
  };

  // const [listRequest, setListRequest] = useState([]);

  // useEffect(() => {
  //   const aluno = aluno
  //   const id = id
  //   axios
  //     .get(
  //       `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${id}`
  //     )
  //     .then((response) => {
  //       setListRequest(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [setListRequest]);

  return (
    <Container>
      <NavAdmin />
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
            <ButtonRequest>ACEITAR</ButtonRequest>
            <ButtonRequest>RECUSAR</ButtonRequest>
          </ButtonsCard>
        </RequestCard>
        <button onClick={goToBack}> Voltar</button>
      </RequestContainer>
    </Container>
  );
};

export default RequestsPage;
