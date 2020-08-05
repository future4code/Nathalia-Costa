import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
  public async createRecipe(
    id: string,
    title: string,
    description: string,
    created_at: string,
    user_id: string
  ): Promise<void> {
    await this.getConnection()
      .insert({
        id,
        title,
        description,
        created_at,
        user_id,
      })
      .into("Recipes");
  }

  public async recipeInfo(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from("Recipes")
      .where({ id });
    return result[0];
  }

  public async getRecipeById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from("Recipes")
      .where({ id });
    return result[0];
  }

  public async deleteRecipe(id: string): Promise<void> {
    await this.getConnection().raw(`
    DELETE FROM Recipes WHERE id = "${id}"`);
  }

  public async getInfoById(id: string): Promise<any> {
    const info = await this.getConnection().raw(`
    SELECT title, description, created_at FROM Recipes WHERE id = "${id}"`);

    return info[0];
  }

  public async getRecipesByUserId(user_id: string): Promise<any> {
    const feed = await this.getConnection().raw(`
      SELECT * FROM Recipes WHERE user_id = "${user_id}"`);

    return feed[0];
  }
}
