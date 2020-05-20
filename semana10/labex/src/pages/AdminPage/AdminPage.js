import React from "react";
import { AdminContainer, TripsContainer, TripsCard } from "../styled";

const AdminPage = () => {

  return (
      <AdminContainer>
        <h1>Minhas Viagens</h1>
        <TripsContainer>
          <TripsCard/>
        </TripsContainer>
      </AdminContainer>
  );
};

export default AdminPage;
