import { bilheteria, Usuarios, Casino } from "../src/exercicio03";

enum Nacionalidade{
    AMERICANOS = 'AMERICANOS',
    BRASILEIROS = 'BRASILEIROS'
};

enum Localidade{
    EUA = 'EUA',
    BRASIL = 'BRASIL'
};

describe('Validando entrada do Casino, um pouco mais complexo', () => {
    test('Verificando tamanho do array de um usuario brasileiro', () => {
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

        expect(resultado.brasileiros.permitido.length).toBeLessThanOrEqual(2)
        expect(resultado.brasileiros.permitido.length).toBeGreaterThanOrEqual(0)
    });
    test('Verificando tamanho do array de um usuario americano igual 0', () => {
        const user: Usuarios = {
            nome: "Natalie",
            idade: 25,
            nacionalidade: Nacionalidade.AMERICANOS
        };

        const casino: Casino = {
            nome: "All Money",
            localidade: Localidade.BRASIL
        }

        const resultado = bilheteria(casino, [user]);

        expect(resultado.brasileiros.proibido.length).toBe(0)
    });
    test('', () => {
        const usuarioUm: Usuarios = {
            nome: "Sofia",
            idade: 19,
            nacionalidade: Nacionalidade.BRASILEIROS
        };
        const usuarioDois: Usuarios = {
            nome: "Jane",
            idade: 19,
            nacionalidade: Nacionalidade.BRASILEIROS
        };
        const usuarioTres: Usuarios = {
            nome: "Sofiah",
            idade: 19,
            nacionalidade: Nacionalidade.AMERICANOS
        };
        const usuarioQuatro: Usuarios = {
            nome: "Janeh",
            idade: 19,
            nacionalidade: Nacionalidade.AMERICANOS
        };
        
        const casino: Casino = {
            nome: "All Money",
            localidade: Localidade.EUA
        };

        const resultado = bilheteria(casino, [usuarioUm, usuarioDois, usuarioTres, usuarioQuatro])

        expect(resultado.americanos.proibido).toContain('Sofiah')
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

        expect(resultado.brasileiros.proibido.length).toBeGreaterThan(1)
        expect(resultado.americanos.proibido.length).toBeLessThan(1)
        expect(resultado.americanos.permitido.length).toBe(2)
    });
});