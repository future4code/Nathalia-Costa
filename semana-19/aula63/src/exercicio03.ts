//ENTRADA

export interface Usuarios{
    nome: string,
    nacionalidade: Nacionalidade,
    idade: number
};

export interface Casino{
    nome: string,
    localidade: Localidade
};

export enum Nacionalidade{
    AMERICANOS = 'AMERICANOS',
    BRASILEIROS = 'BRASILEIROS'
};

export enum Localidade{
    EUA = 'EUA',
    BRASIL = 'BRASIL'
};

//SAIDA
export interface Resultado{
    brasileiros: ResultadoItem,
    americanos: ResultadoItem
};
export interface ResultadoItem{
    permitido: string[],
    proibido: string[]
};

//ASSINATURA
export function bilheteria(casino: Casino, usuarios: Usuarios[]): Resultado{
    //  EUA > maior 21 anos
    // BRA > maior 18 anos
    
    return
};