export abstract class Place {
    constructor(protected cep: string) {}

        public getCep(): string {
            return this.cep;
    }
}
// 2 - a) 