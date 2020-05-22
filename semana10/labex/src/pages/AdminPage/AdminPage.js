import React, { useState, useEffect } from "react";
import { Container, AdminContainer, TripsContainer, TripCard } from "../styled";
import NavAdmin from "./NavAdmin";
import axios from "axios";

const AdminPage = () => {
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
    <Container>
      <NavAdmin />
      <AdminContainer>
        <h1>Minhas Viagens</h1>
        <TripsContainer>
          {tripList.map((trip) => {
            return (
              <TripCard>
                <h3>{trip.name}</h3>
                <p>{trip.planet}</p>
                <p>{trip.date}</p>
              </TripCard>
            );
          })}
        </TripsContainer>
      </AdminContainer>
    </Container>
  );
};

export default AdminPage;
