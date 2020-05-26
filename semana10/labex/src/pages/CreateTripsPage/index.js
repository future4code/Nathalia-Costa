import React, { useState } from "react";
import { CreateTripsContainer, CreateCard, Container } from "../styled";
import { useHistory } from "react-router-dom";
import NavAdmin from "../AdminPage/NavAdmin";
import axios from "axios";

const CreateTripsPage = () => {
  const history = useHistory();

  const goToBack = () => {
    history.push("/logado");
  };
  const [nameValue, setName]= useState("");
  const [planetValue, setPlanet]= useState("");
  const [dateValue, setDate]= useState("");
  const [descriptionValue, setDescription]= useState("");
  const [durationInDaysValue, setDurationInDays]= useState("");
  const [viagemCriada, setViagemCriada]= useState('');

  const onChangeName = event => {
    setName(event.target.value)
  };
  const onChangePlanet = event => {
    setPlanet(event.target.value)
  };
  const onChangeDate = event => {
    setDate(event.target.value)
  };
  const onChangeDescription = event => {
    setDescription(event.target.value)
  };
  const onChangeDurationInDays = event => {
    setDurationInDays(event.target.value)
  };
  const onClickCriarViagem = () => {
    const body = {
      name: nameValue,
      planet: planetValue,
      date: dateValue,
      description: descriptionValue,
      durationInDays: durationInDaysValue
  };
  
    axios
        .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian/trips",
        body,
        {
            headers: {'Content-Type': 'application/json', 'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0'}
        })
        .then(resposta => {
            setViagemCriada(resposta.data.trip);
            console.log(resposta.data.trip);
            alert(`Sua Viagem ${nameValue}, foi criada com sucesso!`);
        })
        .catch(error => {
            alert("Erro");
            console.log("Deu erro", error);
        });
  };

  return (
    <Container>
      <NavAdmin />
      <CreateTripsContainer>
        <h1>Create Trips Page</h1>
        <CreateCard>
          <input type={"text"} placeholder={"Nome"} onChange={onChangeName}/>
          <select onChange={onChangePlanet} >
              <option value={''}></option>
              <option value={'Mercúrio'}>Mercúrio</option>
              <option value={'Vênus'}>Vênus</option>
              <option value={'Marte'}>Marte</option>
              <option value={'Júpiter'}>Júpiter</option>
              <option value={'Saturno'}>Saturno</option>
              <option value={'Urano'}>Urano</option>
              <option value={'Neturno'}>Neturno</option>
          </select>
          <input type={"date"} placeholder={"Data"} onChange={onChangeDate}/>
          <input type={"number"} placeholder={"Duração em dias"} onChange={onChangeDurationInDays}/>
          <textarea placeholder={"Descrição"} onChange={onChangeDescription}/>
          <button onClick={onClickCriarViagem}>Criar Viagem</button>
        </CreateCard>
        <button onClick={goToBack}>Voltar</button>
      </CreateTripsContainer>
    </Container>
  );
};

export default CreateTripsPage;
