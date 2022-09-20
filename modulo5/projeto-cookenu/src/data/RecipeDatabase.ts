import { Recipe } from "../model/Recipe";
import { BaseDatabase } from "./BaseDatabase";


export class RecipeDatabase extends BaseDatabase {

    private static TABLE_NAME = 'cookenu_recipe'

    async insertRecipe(recipe: Recipe): Promise<void> {
        try {
            await BaseDatabase.connection()
                .insert({
                    id: recipe.getId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    created_at: recipe.getCreateAt(),
                    creator_userId: recipe.getCreatorUserId()
                })
                .into(RecipeDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async selectRecipeById(id: string): Promise<Recipe | undefined> {
        try {
            const result = await BaseDatabase.connection()
                .select('*')
                .from(RecipeDatabase.TABLE_NAME)
                .where({ id })
            return result[0] && Recipe.toRecipeModel(result[0])

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}