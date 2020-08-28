import express from "express";
import { BandController } from "../controller/BandController";


export const bandRouter = express.Router();

const bandController = new BandController();

bandRouter.post("/register-band", bandController.registerBand);
bandRouter.get("/details-band", bandController.detailsBand);