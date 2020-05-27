import React, { useState } from "react";
import { CreateTripsContainer, CreateCard, ButtonCriarViagem, InputCriarViagem } from "../styled";
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
      <CreateTripsContainer>
        <h1>Create Trips Page</h1>
        <CreateCard>
          <InputCriarViagem type={"text"} label={"Nome"} onChange={onChangeName}/>
          <InputCriarViagem select label={"Planeta"} onChange={onChangePlanet} >
              <option value={''}></option>
              <option value={'Mercúrio'}>Mercúrio</option>
              <option value={'Vênus'}>Vênus</option>
              <option value={'Marte'}>Marte</option>
              <option value={'Júpiter'}>Júpiter</option>
              <option value={'Saturno'}>Saturno</option>
              <option value={'Urano'}>Urano</option>
              <option value={'Neturno'}>Neturno</option>
          </InputCriarViagem>
          <InputCriarViagem label={"Data"} onChange={onChangeDate}/>
          <InputCriarViagem type={"number"} label={"Duração em dias"} onChange={onChangeDurationInDays}/>
          <InputCriarViagem label={"Descrição"} onChange={onChangeDescription}/>
          <ButtonCriarViagem variant="contained" color={'primary'} onClick={onClickCriarViagem}>Criar Viagem</ButtonCriarViagem>
        </CreateCard>
      </CreateTripsContainer>
  );
};

export default CreateTripsPage;
