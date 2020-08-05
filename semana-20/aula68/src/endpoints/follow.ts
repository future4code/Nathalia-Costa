import { Request, Response } from "express";
import { FollowingDataBase } from "../data/FollowingDataBase";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { BaseDatabase } from "../data/BaseDatabase";

// Essa daqui é um pouco mais complexa. Primeiro nós atribuímos ao req.body.id a uma variável id, só para deixar
// o código mais limpo mesmo. Daí pegamos o token pelo headers, autenticamos ele e verificamos a qual usuário ele está
// atribuído (linhas 18 e 19). Daí invocamos a classe que se liga cmo a tabela following e passamos os parâmetros adequados.
// O do usuário vai pela const user. que foi onde arquivamos os dados dele com a verificação do token, o seguindo vai pelo body,
// assim: { "id": "etc-etc-etc-etc" }

export const follow = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.body.id;
    if (id) {
      const token = req.headers.token as string;
      const authenticator = new Authenticator();
      const authenticationData = authenticator.verifyToken(token);
      const userDb = new UserDatabase();
      const user = await userDb.getUserById(authenticationData.id);

      const followingDataBase = new FollowingDataBase();
      await followingDataBase.follow(user.id, id);

      res.status(200).send({
        message: "You've successfully followed that chef!",
      });
    }
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
  await BaseDatabase.destroyConnection();
};
