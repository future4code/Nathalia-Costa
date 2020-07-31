import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BandInputDTO } from "../model/Band";

export class BandController {
    async registerBand(req: Request, res: Response) {
        
        try {
            const token = req.headers.authorization!;
           
            const band: BandInputDTO = {
                name: req.body.name,
                music_genre: req.body.music_genre,
                responsible: req.body.responsible
            };

            const register = await new BandBusiness().registerBand(token, band);

            res.status(200).send({ message: `Banda ${band.name} registrada!`, register })

        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async detailsBand(req: Request, res: Response){
        try {
            // const token = req.headers.authorization!;
            const identification = req.body.band;
            const seachBand = await new BandBusiness().detailsBand(identification);
            
            res.status(200).send({ seachBand });
            
        } catch (error) {
            res.status(400).send({ message: error.message });
        }

    }
}