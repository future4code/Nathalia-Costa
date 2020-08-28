import {Request, Response } from "express";
import { ShowInputDTO } from "../model/Show";
import { ShowBusiness } from "../business/ShowBusiness";

export class ShowController {
    async addShow(req: Request, res: Response) {
         try {
             const register: ShowInputDTO = {
                 week_day: req.body.week_day,
                 start_time: req.body.start_time,
                 end_time: req.body.end_time,
                 band_id: req.body.band_id
             };

             await new ShowBusiness().addShow(register);

             res.status(200).send({ message: `Show cadastrado no dia ${register.week_day}!`});
         } catch (error) {
            res.status(400).send({ message: error.message });
         }
    }
}