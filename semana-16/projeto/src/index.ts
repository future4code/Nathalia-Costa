import dotenv from "dotenv";
import express from "express";
import {createUserEndPoint, getUserByIdEndpoint, updateUserEndpoint} from "./endpoint/users"
import { createTaskEndPoint, getTaskByIdEndPoint } from "./endpoint/tasks";

dotenv.config();

const app = express();

app.use(express.json());
app.post("/user", createUserEndPoint);
app.get("/user/:id", getUserByIdEndpoint);
app.put("/user/edit", updateUserEndpoint);

app.put("/task", createTaskEndPoint);
app.get("/task/:id", getTaskByIdEndPoint);

const server = app.listen("3000", () => {
    if(server){
        console.log("Server running an http://localhost:3000")
    } else {
        console.log("Failure on running server");
    }
});