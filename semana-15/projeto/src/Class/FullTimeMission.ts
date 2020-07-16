import { Mission } from "./Mission";
import moment from "moment";

export class FullTimeMission extends Mission {}

export const fullTimeMission = new FullTimeMission('1', moment('14/02/2020', "DD/MM/YYYY"), moment('14/09/2020', 'DD/MM/YYYY'),[], [], 5)