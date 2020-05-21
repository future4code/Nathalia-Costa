import React from "react";
import { Container, AdminContainer, TripsContainer, TripsCard } from "../styled";
import NavAdmin from "./NavAdmin";

const AdminPage = () => {
  return (
    <Container>
      <NavAdmin />
      <AdminContainer>
        <h1>Minhas Viagens</h1>
        <TripsContainer>
          <TripsCard />
        </TripsContainer>
      </AdminContainer>
    </Container>
  );
};

export default AdminPage;
