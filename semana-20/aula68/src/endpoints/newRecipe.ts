import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { RecipeDatabase } from "../data/RecipeDataBase";
import moment from "moment";
import { IdGenerator } from "../services/IdGenerator";
import { BaseDatabase } from "../data/BaseDatabase";
export const newRecipe = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const today = moment().format("YYYY-MM-DD");
    const recipeData = {
      title: req.body.title,
      description: req.body.description,
      created_at: today,
    };
    const authenticator = new Authenticator();
    const authenticatorData = authenticator.verifyToken(token);

    const idGenerator = new IdGenerator();
    const recipeId = idGenerator.generate();
    const userId: string = authenticatorData.id;
    const recipesDB = new RecipeDatabase();
    const recipe = await recipesDB.createRecipe(
      recipeId,
      recipeData.title,
      recipeData.description,
      recipeData.created_at,
      userId
    );

    res.status(200).send({
      message: `Recipe ${recipeData.title} created successfully`,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
  BaseDatabase.destroyConnection();
};
