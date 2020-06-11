import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  ListTripsContainer,
  ListTripsCards,
  ButtonListTrips,
  TripCard,
  FabList
} from "../styled";
import NavigationIcon from '@material-ui/icons/Navigation';

const ListTrips = (props) => {
  const [tripList, setTripList] = useState([]);
  const [viagemSelecionada, setViagemSelecionada] = useState("2");

  //Direcionar páginas
  const history = useHistory();
  const pageInicial = () => {
    history.push("/");
  };
  const onClickReservar = () => {
    history.push(`/list-trips/inscricao/${viagemSelecionada}`);
  };
  console.log("viagem selecionada", viagemSelecionada);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian/trips"
      )
      .then((response) => {
        setTripList(response.data.trips);
        console.log(response.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setTripList, viagemSelecionada, setViagemSelecionada]);

  return (
    <ListTripsContainer>
      <ButtonListTrips
        variant="contained"
        color={"primary"}
        onClick={pageInicial}
      >
        Pagina inicial
      </ButtonListTrips>
      <h1>Viagens disponiveis</h1>
      <ListTripsCards>
        {tripList.map((trip) => {
          return (
            <TripCard
              value={trip.id}
              onChange={(e) => setViagemSelecionada(e.target.value)}
            >
              <h3>{trip.name}</h3>
              <p>{trip.planet}</p>
              <p>{trip.date}</p>
            </TripCard>
          );
        })}
      </ListTripsCards>
      <FabList
        variant="extended"         
        color={"secondary"}
        onClick={onClickReservar}>
        <NavigationIcon />
        Reservar Lugar
      </FabList>
    </ListTripsContainer>
  );
};

export default ListTrips;
