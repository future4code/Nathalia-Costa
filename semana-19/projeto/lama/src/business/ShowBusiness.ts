import { ShowInputDTO } from "../model/Show";
import { IdGenerator } from "../services/IdGenerator";
import { ShowDatabase } from "../data/ShowDatabase";

export class ShowBusiness {
    async addShow(show: ShowInputDTO){

        if(!show.week_day || !show.start_time || !show.end_time || !show.band_id){
            throw new Error("Insert all data");
        };

        // const showDataBase = await new ShowDatabase().getShow(show)
        // if(show.week_day === ){

        // }
        
        
        const showId = new IdGenerator().generate();

        await new ShowDatabase().addShow(
            showId, show.week_day, show.start_time, show.end_time, show.band_id
        )
    }
}