import { Request, Response } from "express";
import { FollowingDataBase } from "../data/FollowingDataBase";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { BaseDatabase } from "../data/BaseDatabase";

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
