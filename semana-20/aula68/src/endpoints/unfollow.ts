import { Request, Response } from "express";
import { UnfollowingDataBase } from "../data/UnfollowingDataBase";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { BaseDatabase } from "../data/BaseDatabase";

export const unfollow = async (req: Request, res: Response): Promise<void> => {
    try {
      
      const id = req.body.id;

      if (id == "") {
        throw new Error("Invalid user");
      };

      const token = req.headers.token as string;
      const authenticator = new Authenticator();
      const authenticationData = authenticator.verifyToken(token);

      const userDb = new UserDatabase();
      const user = await userDb.getUserById(authenticationData.id);

      const unfollowingDatabase = new UnfollowingDataBase();
      await unfollowingDatabase.unfollow(user.id, id);

      res.status(200).send({
        message: "Unfollowed successfully",
      });
      
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
    await BaseDatabase.destroyConnection();
  };