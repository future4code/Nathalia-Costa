import { BaseDatabase } from './BaseDatabase';
import { Show } from '../model/Show';

export class ShowDatabase extends BaseDatabase {
    private static TABLE_NAME = 'Shows_LAMA';

    public async addShow(
        id: string,
        week_day: string, 
        start_time: number, 
        end_time: number,
        band_id: string
    ): Promise<void> {
        try {
            await this.getConnection()
                .insert({id, week_day, start_time, end_time, band_id})
                .into(ShowDatabase.TABLE_NAME)
        } catch(error){
            throw new Error(error.sqlMessage || error.message);
        };
    };

    public async getShow(show: Show): Promise<Show> {
        const result = await this.getConnection()
            .select('*')
            .from(ShowDatabase.TABLE_NAME)
            .where({week_day: show.getWeekDay(), 
                start_time: show.getStartTime(), 
                end_time: show.getEndTime()})
        
            return new Show(
                result[0].id, 
                result[0].week_day, 
                result[0].start_time, 
                result[0].end_time,
                result[0].band_id)
    }
};