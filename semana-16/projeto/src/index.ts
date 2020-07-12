import dotenv from "dotenv";
import express from "express";
import {createUserEndPoint} from "./endpoint/users"

dotenv.config();

const app = express();

app.use(express.json());
app.post("/user", createUserEndPoint);

const server = app.listen("3000", () => {
    if(server){
        console.log("Server running an http://localhost:3000")
    } else {
        console.log("Failure on running server");
    }
});