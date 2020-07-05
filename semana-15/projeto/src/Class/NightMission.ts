import { Mission } from "./Mission";
import moment from "moment";

export class NightMission extends Mission {
    public setName(name: string){
        if(name.indexOf('-na-night') !== -1){
            super.setName(name);
        } else {
            super.setName(name + '-na-night')
        }
    }
}

export const nightMission = new NightMission('2', moment('10/05/2020', "DD/MM/YYYY"), moment('10/11/2020', 'DD/MM/YYYY'),[], [], 7)