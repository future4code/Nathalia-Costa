import { UserBusiness } from "../../src/business/UserBusiness";
import { stringToUserRole, User, UserRole } from "../../src/model/User";

describe('Teste para UserByID', () => {
    
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};

    test('Erro de usuário não existente', async () => {
        expect.assertions(2);

        try {
            const getUserById = jest.fn();
            userDatabase = { getUserById };

            const userBuniness = new UserBusiness(
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
            );
            
            await userBuniness.getUserById("Invalid id");

        } catch (error) {

            expect(error.errorCode).toBe(404);
            expect(error.message).toBe("User not found");
        }
    });
    test('Sucesso do usuário existente', async () => {
        expect.assertions(2);

        const getUserById = jest.fn(
            (id: string) =>
                new User( "id", "Astrodev", "astrodev@gmail.com", "hash", stringToUserRole("ADMIN"))
        );

        userDatabase = { getUserById };

        const userBuniness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        );
        
        const user = await userBuniness.getUserById("id");

        expect(getUserById).toHaveBeenCalledWith("id");
        expect(user).toEqual( {
            id: "id", 
            name: "Astrodev", 
            email: "astrodev@gmail.com", 
            role: UserRole.ADMIN
            });

    });
})