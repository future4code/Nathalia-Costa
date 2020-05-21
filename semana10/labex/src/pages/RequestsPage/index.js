import React from "react";
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

const RequestsPage = () => {
  const history = useHistory();

  const goToBack = () => {
    history.push("/logado");
  };
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
