import React, { useEffect } from "react";
import {Container, BodyAdm} from "../styled";
import NavAdmin from "./NavAdmin";
import CreateTripsPage from "../AdminPage/PagesPrivadas/CreateTripsPage";
import TripDetailsPage from "../AdminPage/PagesPrivadas/TripDetailsPage";
import { useHistory } from "react-router-dom";

const AdminPage = (props) => {
  const history = useHistory();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
      if (token === null) {
        history.push("/");
      }
  }, [history]);
  return (
    <Container key={AdminPage}>
      <NavAdmin key={NavAdmin}/>
      <BodyAdm key={BodyAdm}>
        <CreateTripsPage key={CreateTripsPage}/>
        <TripDetailsPage key={TripDetailsPage}/>
      </BodyAdm>

    </Container>
  );
};

export default AdminPage;
