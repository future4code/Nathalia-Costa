import { Request, Response } from "express";
import { createUser, getUserById } from "../data/users"

export const createUserEndPoint = async (req: Request, res: Response
): Promise<void> => {
    try {
        if(
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email
        ){ 
            throw new Error("Parâmetros inválidos") 
        }
        await createUser(
            req.body.name,
            req.body.nickname,
            req.body.email
        )
        res.status(200).send({ message: "Sucesso!" })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
};

export const getUserByIdEndpoint = async (
    req: Request, res: Response) => {
    try {
        const id = req.params.id

        const user = await getUserById(id);

        if (!user) {
            throw new Error(("Usuario não encontrado"));
        }
        res.status(200).send({
            id: user.id,
            name: user.name
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}