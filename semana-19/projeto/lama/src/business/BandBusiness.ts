import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";
import { BandDatabase } from "../data/BandDatabase";
import { BandInputDTO } from "../model/Band";
import { IdGenerator } from "../services/IdGenerator";

export class BandBusiness{
    async registerBand(token: string, band: BandInputDTO){
            
        const authenticatorData = new Authenticator().getData(token);
        const userId = authenticatorData.id;
        const user = await new UserDatabase().getUserById(userId);
        
        if(user.getRole() !== 'ADMIN'){
            throw new Error("Only Admin can register bands")
        };
 
        const bandId = new IdGenerator().generate();
    
        await new BandDatabase().registerBand(
            bandId, band.name, band.music_genre, band.responsible)    
        
        return bandId
    };

    async detailsBand(identification: string){
        
        const band = await new BandDatabase().getBandById(identification)

        return band
    }
}