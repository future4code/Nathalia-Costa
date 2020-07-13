import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { IdGenerator } from "./services/IdGenerator";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";

dotenv.config();

const app = express();

app.use(express.json());

app.post("/signup", async (req: Request, res: Response) =>{
  try {
    if(!req.body.email || req.body.email.indexOf('@') === -1){
      throw new Error("Invalid Email");
    };

    if(!req.body.password || req.body.password.length < 6){
      throw new Error("Invalid password");
    };

    const userData = {
      email: req.body.email,
      password: req.body.password
    };

    const idGenerador = new IdGenerator();
    const id = idGenerador.generate();
    
    const userDatabase = new UserDatabase();
    await userDatabase.createUser(id, userData.email, userData.password);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({id});

    res.status(200).send({token})

  } catch (error) {
    res.status(400).send({message: error.message})
  }
});

app.post("/login", async (req: Request, res: Response) =>{
  try {
        
    if(!req.body.email || req.body.email.indexOf('@') === -1){
      throw new Error("Invalid Email");
    };
    
    const userData = {
      email: req.body.email,
      password: req.body.password
    };

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserByEmail(userData.email);

    if(user.password !== userData.password){
      throw new Error("Invalid password");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({id: user.id});

    res.status(200).send({token})

  } catch (error) {
    res.status(400).send({message: error.message})
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
