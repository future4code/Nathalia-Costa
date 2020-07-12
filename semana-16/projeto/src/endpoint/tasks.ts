import { Request, Response } from "express";
import  { createTask, getTasksById } from "../data/tasks";
import moment from "moment"

export const createTaskEndPoint = async (
    req: Request, res: Response) => {
    try {
        if(
            !req.body.title ||
            !req.body.description ||
            !req.body.limitDate ||
            !req.body.creatorUserId
        ){
            throw new Error("Parametros invalidos");
        }
        const date = moment(req.body.limitDate, "DD/MM/YYYY");
        await createTask(
            req.body.title,
            req.body.description,
            date,
            req.body.creatorUserId
        );
        res.sendStatus(200)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}

export const getTaskByIdEndPoint = async (
    req: Request, res: Response) => {
    try {
        
        const task = await getTasksById(req.params.id)
        if(!task){
            throw new Error("Task não encontrada")
        }
        res.status(200).send({
            ...task, 
            limitDate: moment(task.limitDate, "YYYY-MM-DD").format("DD/MM/YYYY")
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
}