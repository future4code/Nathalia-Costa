import * as jwt from "jsonwebtoken";

interface AuthenticationData {
    id: string;
};

export class Authenticator{
    private static EXPIRES_IN = "2min";

    public generateToken(input: AuthenticationData): string {
        const token = jwt.sign(
            {id: input.id}, 
            "babi",
            {expiresIn: Authenticator.EXPIRES_IN}
        );
        return token
    }
};
