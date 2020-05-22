import React, { useState, useEffect } from "react";
import { ListTripsContainer, ListTripsCards, TripCard } from "../styled";
import { useHistory } from "react-router-dom";
import axios from "axios";

const ListTrips = () => {
  const history = useHistory();

  const pageInicial = () => {
    history.push("/");
  };
  const pageInscricao = () => {
    history.push("/list-trips/inscricao");
  };
  const [tripList, setTripList] = useState([]);

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
      <button onClick={pageInicial}>Pagina inicial</button>
      <button onClick={pageInscricao}>Inscreva-se</button>
      <h1>Viagens disponiveis</h1>
      <ListTripsCards>
        {tripList.map((trip) => {
          return (
            <TripCard>
              <h3>{trip.name}</h3>
              <p>{trip.planet}</p>
              <p>{trip.date}</p>
            </TripCard>
          );
        })}
      </ListTripsCards>
    </ListTripsContainer>
  );
};

export default ListTrips;
