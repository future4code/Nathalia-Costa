import { Request, Response } from "express";
import { createUser } from "../data/users"

export const createUserEndPoint = async(req: Request, res: Response
    ): Promise<void> => {
        try {
           await createUser(
               req.body.name,
               req.body.nickname, 
               req.body.email
           )
           res.status(200).send({message: "Sucesso!"})
        } catch (error) {
            res.status(400).send({message: error.message})
        }
};