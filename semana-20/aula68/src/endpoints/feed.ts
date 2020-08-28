import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDataBase";
import { BaseDatabase } from "../data/BaseDatabase";

export const feed = async (req: Request, res: Response): Promise<any> => {
  try {
    const userId = req.body.user_id as string;
    const recipesDB = new RecipeDatabase();
    const feed = await recipesDB.getRecipesByUserId(userId);

    res.status(200).send({
      feed,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
  BaseDatabase.destroyConnection();
};
