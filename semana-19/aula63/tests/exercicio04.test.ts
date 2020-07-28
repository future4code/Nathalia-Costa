import { bilheteria, Usuarios, Casino } from "../src/exercicio03";

enum Nacionalidade{
    AMERICANOS = 'AMERICANOS',
    BRASILEIROS = 'BRASILEIROS'
};

enum Localidade{
    EUA = 'EUA',
    BRASIL = 'BRASIL'
};

describe('Validando entrada do Casino', () => {
    test('Usuario brasileiro permitido no Br', () => {
        const user: Usuarios = {
            nome: "Nathalia",
            idade: 30,
            nacionalidade: Nacionalidade.BRASILEIROS
        };

        const casino: Casino = {
            nome: "Tudo por dinheiro",
            localidade: Localidade.BRASIL
        }

        const resultado = bilheteria(casino, [user]);

        expect(resultado.brasileiros.permitido).toEqual(['Nathalia'])
    });
    test('Usuario americano permitido no Br', () => {
        const user: Usuarios = {
            nome: "Natalie",
            idade: 25,
            nacionalidade: Nacionalidade.AMERICANOS
        };

        const casino: Casino = {
            nome: "Tudo por dinheiro",
            localidade: Localidade.BRASIL
        }

        const resultado = bilheteria(casino, [user]);

        expect(resultado.americanos.permitido).toEqual(['Natalie'])
    });
    test('02 brasileiros e 02 americanos entrando num casino EUA, com 19 anos', () => {
        const userOne: Usuarios = {
            nome: "Maria",
            idade: 19,
            nacionalidade: Nacionalidade.BRASILEIROS
        };
        const userTwo: Usuarios = {
            nome: "Joao",
            idade: 19,
            nacionalidade: Nacionalidade.BRASILEIROS
        };

        const userThree: Usuarios = {
            nome: "Mariah",
            idade: 19,
            nacionalidade: Nacionalidade.AMERICANOS
        };
        const userFour: Usuarios = {
            nome: "John",
            idade: 19,
            nacionalidade: Nacionalidade.AMERICANOS
        };


        const casino: Casino = {
            nome: "AllMoney",
            localidade: Localidade.EUA
        };

        const resultado = bilheteria(casino, [userOne, userTwo, userThree, userFour]);

        expect(resultado.americanos.proibido).toEqual([ 'Mariah', 'John'])
        expect(resultado.brasileiros.proibido).toEqual(['Maria', 'Joao'])
    });
    test('02 brasileiros e 02 americanos entrando num casino EUA ', () => {
        const userOne: Usuarios = {
            nome: "Maria",
            idade: 19,
            nacionalidade: Nacionalidade.BRASILEIROS
        };
        const userTwo: Usuarios = {
            nome: "Joao",
            idade: 19,
            nacionalidade: Nacionalidade.BRASILEIROS
        };

        const userThree: Usuarios = {
            nome: "Mariah",
            idade: 21,
            nacionalidade: Nacionalidade.AMERICANOS
        };
        const userFour: Usuarios = {
            nome: "John",
            idade: 21,
            nacionalidade: Nacionalidade.AMERICANOS
        };


        const casino: Casino = {
            nome: "AllMoney",
            localidade: Localidade.EUA
        };

        const resultado = bilheteria(casino, [userOne, userTwo, userThree, userFour]);

        expect(resultado.americanos.permitido).toEqual([ 'Mariah', 'John'])
        expect(resultado.brasileiros.proibido).toEqual(['Maria', 'Joao'])
    });
});