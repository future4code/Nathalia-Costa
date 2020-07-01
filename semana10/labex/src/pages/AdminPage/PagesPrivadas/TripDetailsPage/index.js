import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  RequestContainer, 
  GridCards,
  InputRequest,
  RequestCard,
  InformacoesCard,
  PCard,
  ButtonsCard,
  ButtonRequest
} from "../../../styled";

const TripDetailsPage = () => {
  const history = useHistory();
  const [listaDeViagens, setListaDeViagens] = useState([]);
  const [listaDeCandidatos, setListaDeCandidatos] = useState([]);
  const [viagemEscolhida, setViagemEscolhida] = useState({});
  const [resquestValue, setResquest] = useState('');

    
  // onclick do request
  const onClickRequest = event => {
    setResquest(event.target.value);
    console.log(resquestValue);
  }

  useEffect(() => {

    //Token de Autorização
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/");
    };  

    // Lista de viagens
    axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian/trips"
    )
    .then((response) => {
      setListaDeViagens(response.data.trips);
      console.log(response.data.trips);
    })
    .catch((err) => {
      console.log(err);
    });

    // Detalhes das viagens com as inscrições        
    const idViagem = viagemEscolhida;
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian/trip/${idViagem}`,
        {
          headers: { "Content-Type": "application/json", auth: `${token}` },
        }
      )
      .then((resposta) => {
        setListaDeCandidatos(resposta.data.trip.candidates);
        console.log(resposta.data.trip.candidates);
      })
      .catch((error) => {
        console.log("Deu erro", error);
      });

      //Lista de candidatos de uma viagem
      const bodyPut = {
        approve: resquestValue
      };
      
      console.log('Body Put', bodyPut)
      const idViagemEscolhida = viagemEscolhida.id;
      const idPessoa = listaDeCandidatos.id;

      console.log('viagem escolhida', idViagemEscolhida)
      console.log('pessoa escolhida', idPessoa)
      axios
      .put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian/trips/${idViagemEscolhida}/candidates/${idPessoa}/decide`,
      bodyPut,
      {
          headers: {'Content-Type': 'application/json', 'auth': `${token}`}
      })
      .then(resposta => {
          
          console.log(resposta.data.message);
      })
      .catch(error => {
          console.log("Deu erro", error);
      });

  }, [history, 'token', viagemEscolhida, setResquest]);

  return (
    <RequestContainer key={TripDetailsPage}>
      <h1>Requests Page</h1>   
      <GridCards>
        <InputRequest select label={"Escolha uma viagem aqui"} value={viagemEscolhida} onChange={((e) => setViagemEscolhida(e.target.value))}>
          {listaDeViagens.map((viagem) => {
            return <option value={viagem.id}>{viagem.name}</option>;
          })}
        </InputRequest>
            {listaDeCandidatos.map((candidato)=>{
              return (
              <RequestCard>          
                <InformacoesCard>
                  <PCard><b>{candidato.name}</b>, {candidato.age} anos - {candidato.profession}</PCard>
                  <PCard>{candidato.applicationText}</PCard>
                </InformacoesCard>          
                <ButtonsCard>
                  <ButtonRequest 
                    variant="contained"
                    color={"secondary"} 
                    onClick={onClickRequest} 
                    value={true}>
                    v^
                  </ButtonRequest>
                  <ButtonRequest 
                    variant="contained"
                    color={"secondary"} 
                    value={false}
                    onClick={onClickRequest}
                  >X
                  </ButtonRequest>
                </ButtonsCard>
              </RequestCard>
              )
            })}
      </GridCards>
    </RequestContainer>
  );
};

export default TripDetailsPage;
