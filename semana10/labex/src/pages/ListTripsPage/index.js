import React, { useState, useEffect } from "react";
import { ListTripsContainer, ListTripsCards, ButtonListTrips, TripCard } from "../styled";
import { useHistory } from "react-router-dom";
import axios from "axios";

const ListTrips = (props) => {
  const history = useHistory();

  const pageInicial = () => {
    history.push("/");
  };
  const onClickReservar = () => {
    history.push(`/list-trips/inscricao${viagemSelecionada}`);
  };
  
  const [tripList, setTripList] = useState([]);
  const [viagemSelecionada, setViagemSelecionada] = useState("");

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
  }, [setTripList]);    
  
    
  return (

    <ListTripsContainer >
      <ButtonListTrips variant="contained" color={'primary'} onClick={pageInicial}>Pagina inicial</ButtonListTrips>
      <h1>Viagens disponiveis</h1>
      <ListTripsCards>
        {tripList.map((trip) => {
          return (
            <TripCard 
            value={viagemSelecionada}
            onChange={e => setViagemSelecionada(e.target.value)}
            >
              <h3>{trip.name}</h3>
              <p>{trip.planet}</p>
              <p>{trip.date}</p>
              <ButtonListTrips value={trip.id} variant="contained" color={'secondary'} onClick={onClickReservar}>Reservar</ButtonListTrips>
            </TripCard>
          );
        })}
      </ListTripsCards>
    </ListTripsContainer>
  );
};

export default ListTrips;
