import { performPurchase, User } from "../src/exercicio01";

//a. 
describe('Validando função', () => {
    test('Saldo maior que a compra', () => {
        const user: User = {
            nome: "Nathalia",
            saldo: 50
        };

        const resultado = performPurchase(user, 20);

        expect(resultado).toEqual({
            ...user,
            saldo: 30
        });
    });
    test('Saldo igual a compra', () => {
        const user: User = {
            nome: "Nathalia",
            saldo: 50
        };

        const resultado = performPurchase(user, 50);

        expect(resultado).toEqual({
            ...user,
            saldo: 0
        });
    });
    test('Saldo menor que a compra', () => {
        const user: User = {
            nome: "Nathalia",
            saldo: 50
        };

        const resultado = performPurchase(user, 70);

        expect(resultado).toEqual(undefined);
    });
})