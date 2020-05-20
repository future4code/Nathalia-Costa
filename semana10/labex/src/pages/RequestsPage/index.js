import React from "react";
import { RequestContainer, RequestCard, InformacoesCard, ButtonsCard, ButtonRequest } from "../styled";

const RequestsPage = () => {
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
          <ButtonRequest>ACEITAR</ButtonRequest>
          <ButtonRequest>RECUSAR</ButtonRequest>
        </ButtonsCard>
      </RequestCard>
    </RequestContainer>
  );
};

export default RequestsPage;
