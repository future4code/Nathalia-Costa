import React, { useEffect } from "react";
import {Container, BodyAdm} from "../styled";
import NavAdmin from "./NavAdmin";
import RequestsPage from "../RequestsPage";
import CreateTripsPage from "../CreateTripsPage";
import { useHistory } from "react-router-dom";

const AdminPage = () => {
  const history = useHistory();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
      if (token === null) {
        history.push("/");
      }
  }, [history]);
  return (
    <Container>
      <NavAdmin />
      <BodyAdm>
        <CreateTripsPage/>
        <RequestsPage/>
      </BodyAdm>

    </Container>
  );
};

export default AdminPage;
