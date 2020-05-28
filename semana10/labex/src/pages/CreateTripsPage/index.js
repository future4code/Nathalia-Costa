import React, { useState } from "react";
import {
  CreateTripsContainer,
  FormCriarViagem,
  ButtonCriarViagem,
  InputCriarViagem,
} from "../styled";
import {KeyboardDatePicker} from "@material-ui/pickers";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "../../components/Hooks";

const CreateTripsPage = () => {

  const [selectedDate, setSelectedDate] = React.useState(new Date(''));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  const { form, onChange } = useForm({
    nome: "",
    planeta: "",
    data: "",
    descricao: "",
    duracao: "",
  });

  const onChangeValor = (ev) => {
    const { value, name } = ev.target;

    onChange(name, value);
  };

  const onSubmitForm = (ev) => {
    ev.preventDefault();

    console.log(form);
  };

  const [viagemCriada, setViagemCriada] = useState("");
  const history = useHistory()

  const onClickCriarViagem = () => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/");
    }
    
    const body = {
      name: form.nome,
      planet: form.planeta,
      date: form.data,
      description: form.descricao,
      durationInDays: form.duracao,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian/trips",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            auth:
              `${token}`,
          },
        }
      )
      .then((resposta) => {
        console.log(resposta.data.trip);
        alert(`Sua Viagem ${form.nome}, foi criada com sucesso!`);
      })
      .catch((error) => {
        alert("Erro");
        console.log("Deu erro", error);
      });
  };

  return (
    <CreateTripsContainer>
      <h1>Create Trips Page</h1>
      <FormCriarViagem onSubmit={onSubmitForm}>
        <InputCriarViagem
          value={form.nome}
          name="nome"
          type={"text"}
          inputProps={{ 
            pattern: "[A-Za-z ]{5,}", 
            title: "O nome deve conter 5 letras no mínimo" }}
          label={"Nome"}
          onChange={onChangeValor}
          required
        />
        <InputCriarViagem select 
          value={form.planeta}
          name="planeta"
          label={"Planeta"} 
          onChange={onChangeValor}
          required>
          <option value={"Mercúrio"}>Mercúrio</option>
          <option value={"Vênus"}>Vênus</option>
          <option value={"Marte"}>Marte</option>
          <option value={"Júpiter"}>Júpiter</option>
          <option value={"Saturno"}>Saturno</option>
          <option value={"Urano"}>Urano</option>
          <option value={"Neturno"}>Neturno</option>
        </InputCriarViagem>
        <KeyboardDatePicker 
        value={form.data}
        name="data"
        format="MM/dd/yyyy"
        onChange={onChangeValor} 
        required/>
        <InputCriarViagem
          value={form.duracao}
          name="duracao"
          type={"number"}
          inputProps={{ 
            pattern: "[A-Za-z ]{50,}", 
            title: "A duração deve conter no mínimo 50 dias" }}
          label={"Duração em dias"}
          onChange={onChangeValor}
          required
        />
        <InputCriarViagem 
          value={form.descricao}
          name="descricao"
          type={"text"}
          inputProps={{ 
            pattern: "[A-Za-z ]{30,}", 
            title: "A descrição deve conter 30 letras no mínimo" }}
          label={"Descrição"} 
          onChange={onChangeValor} 
          required/>
        <ButtonCriarViagem
          variant="contained"
          color={"primary"}
          onClick={onClickCriarViagem}
        >
          Criar Viagem
        </ButtonCriarViagem>
      </FormCriarViagem>
    </CreateTripsContainer>
  );
};

export default CreateTripsPage;
