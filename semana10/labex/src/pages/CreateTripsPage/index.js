import React from 'react';
import { CreateTripsConstainer, CreateCard } from "../styled";

const CreateTripsPage = () => {
    return (
        <CreateTripsConstainer>
            <h1>Create Trips Page</h1>
            <CreateCard>
                <input type={"text"} placeholder={"Nome"}/>
                <input type={"text"} placeholder={"Planeta"}/>
                <input type={"date"} placeholder={"Data"}/>
                <input type={"number"} placeholder={"Duração em dias"}/>
                <textarea placeholder={"Descrição"}/>
            </CreateCard>
        </CreateTripsConstainer>
    );
};

export default CreateTripsPage