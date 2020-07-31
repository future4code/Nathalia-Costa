import { BaseDatabase } from './BaseDatabase';
import { Band } from '../model/Band';

export class BandDatabase extends BaseDatabase {
    private static TABLE_NAME = 'Bands_LAMA';

    public async registerBand(
        id: string,
        name: string,
        music_genre: string,
        responsible: string
    ): Promise<void> {
        try {
            await this.getConnection()
                .insert({id, name, music_genre, responsible})
                .into(BandDatabase.TABLE_NAME)
        } catch(error){
            throw new Error(error.sqlMessage || error.message);
        };
    };

    public async getBandById(BandId: string): Promise<Band> {
        const result = await this.getConnection()
            .select('*')
            .from(BandDatabase.TABLE_NAME)
            .where({id: BandId})

        return new Band(result[0].id, result[0].name, result[0].music_genre, result[0].responsible)
    };

    public async getBandByName(NameBand: string): Promise<Band> {
        const result = await this.getConnection()
            .select('*')
            .from(BandDatabase.TABLE_NAME)
            .where({name: NameBand})
        console.log(result[0])
        return new Band(result[0].id, result[0].name, result[0].music_genre, result[0].responsible)
    };
};