export class Band{
    constructor(
    private id: string,
    private name: string,
    private music_genre: string,
    private responsible: string
    ){}

    public getId = () => this.id;
    public getName = () => this.name;
    public getMusicGenre = () => this.music_genre;
    public getResponsible = () => this.responsible;
}
export interface BandInputDTO{
    name: string;
    music_genre: string;
    responsible: string;
}