//ENTRADA

import { userInfo } from "os";

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
    const permitido: Usuarios[] = [];
    const proibido: Usuarios[] = [];

    for (const usuario of usuarios){
        if(casino.localidade === Localidade.EUA){
            if(usuario.idade >= 21){
                permitido.push(usuario);
            } else {
                proibido.push(usuario);
            }
        } else if (casino.localidade === Localidade.BRASIL){
            if (usuario.idade >= 18){
                permitido.push(usuario)
            } else {
                proibido.push(usuario)
            }
            break;
        }
    }
    return {
        brasileiros: {
            permitido: permitido
            .filter((usuario) => usuario.nacionalidade === Nacionalidade.BRASILEIROS)
            .map((u) => u.nome),
            proibido: proibido
            .filter (usuario => usuario.nacionalidade === Nacionalidade.BRASILEIROS)
            .map((u) => u.nome)
        },
        americanos: {
            permitido: permitido
                .filter((usuario) => usuario.nacionalidade === Nacionalidade.AMERICANOS)
                .map((u) => u.nome),
            proibido: proibido
                .filter (usuario => usuario.nacionalidade === Nacionalidade.AMERICANOS)
                .map((u) => u.nome)
        }
    }
};