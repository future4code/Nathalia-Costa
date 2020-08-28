import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";
import { BaseDatabase } from "../data/BaseDatabase";

export const getFollowing = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const token = req.headers.token as string;
    const authenticator = new Authenticator();
    const authenticationData = authenticator.verifyToken(token);
    const userDb = new UserDatabase();
    const user = await userDb.getUserById(authenticationData.id);
    const followers = await userDb.getFollowing(user.id);

    res.status(200).send({
      followers,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
  BaseDatabase.destroyConnection();
};
