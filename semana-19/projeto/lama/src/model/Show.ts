export class Show{
    constructor(
    private id: string,
    private week_day: WEEKDAY,
    private start_time: number,
    private end_time: number,
    private band_id: string
    ){}

    public getId = () => this.id;
    public getWeekDay = () => this.week_day;
    public getStartTime = () => this.start_time;
    public getEndTime = () => this.end_time;
    public getBandId = () => this.band_id;

    setId = (id: string) => this.id = id;
    setWeekDay = (weekDay: WEEKDAY) => this.week_day = weekDay;
    setStartTime = (startTime: number) => this.start_time = startTime;
    setEndTime = (endTime: number) => this.end_time = endTime;
    setBandId = (bandId: string) => this.band_id = bandId;

    
    static showWeekDay(input: string): WEEKDAY{
        switch ( input ) {
            case "Sexta": 
                return WEEKDAY.SEXTA;
            case "Sabado":
                return WEEKDAY.SABADO;
            case "Domingo":
                return WEEKDAY.DOMINGO;
            default:
                throw new Error("Invalid Week Day");
        }
    }
};

export enum WEEKDAY{
    SEXTA = "Sexta",
    SABADO = "Sabado",
    DOMINGO = "Domingo"
};

export interface ShowInputDTO{
    week_day: string,
    start_time: number,
    end_time: number,
    band_id: string
};