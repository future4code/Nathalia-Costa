import React, { useState, useEffect } from "react";
import {
  Container,
  RequestContainer,
  RequestCard,
  InformacoesCard,
  ButtonsCard,
  ButtonRequest
} from "../styled";
import NavAdmin from "./NavAdmin";
import axios from "axios";

const AdminPage = () => {
  const [tripList, setTripList] = useState([]);
  const [resquestValue, setResquest] = useState('');

  const onClickRequest = event => {
   setResquest(event.target.value)
  }
    useEffect(() => {
      const body = {
        approve: resquestValue
      };
      
        axios
            .put(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian/trips/NoIFVcOiSgTKTIPVZwXS/candidates/DYmdG4XpVVjKY1SEfVH2/decide`,
            body,
            {
                headers: {'Content-Type': 'application/json', 'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0'}
            })
            .then(resposta => {
                
                console.log(resposta.data);
            })
            .catch(error => {
                alert("Erro");
                console.log("Deu erro", error);
            });
    }, []);

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
            <ButtonRequest onClick={onClickRequest} value={true}>ACEITAR</ButtonRequest>
            <ButtonRequest onClickRequest={onClickRequest} value={false}>RECUSAR</ButtonRequest>
          </ButtonsCard>
        </RequestCard>
      </RequestContainer>
    </Container>
  );
};

export default AdminPage;
