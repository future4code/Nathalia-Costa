import React from "react";
import { CreateTripsContainer, CreateCard, Container } from "../styled";
import { useHistory } from "react-router-dom";
import NavAdmin from "../AdminPage/NavAdmin";

const CreateTripsPage = () => {
  const history = useHistory();

  const goToBack = () => {
    history.push("/logado");
  };
  return (
    <Container>
      <NavAdmin />
      <CreateTripsContainer>
        <h1>Create Trips Page</h1>
        <CreateCard>
          <input type={"text"} placeholder={"Nome"} />
          <input type={"text"} placeholder={"Planeta"} />
          <input type={"date"} placeholder={"Data"} />
          <input type={"number"} placeholder={"Duração em dias"} />
          <textarea placeholder={"Descrição"} />
        </CreateCard>
        <button onClick={goToBack}>Voltar</button>
      </CreateTripsContainer>
    </Container>
  );
};

export default CreateTripsPage;
