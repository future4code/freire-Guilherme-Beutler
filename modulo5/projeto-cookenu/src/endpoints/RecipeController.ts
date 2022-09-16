import { Request, Response } from "express";
import moment from "moment";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../model/Recipe";
import { Authenticator } from "../services/authenticator";
import { GenerateId } from "../services/idGenerator";


export class RecipeController {

    async createRecipe(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const { title, description } = req.body

            if (!title || !description) {
                res.statusCode = 400
                throw new Error('Please provid title and description')
            }

            if (!token) {
                res.statusCode = 401
                throw new Error('Please provid a token')
            }

            const authenticator = new Authenticator()
            const tokenData = authenticator.getTokenData(token)

            if (!tokenData) {
                res.statusCode = 401
                throw new Error('Invalid Token')
            }

            const id = new GenerateId().generateId()

            const newRecipe = new Recipe(
                id,
                title,
                description,
                new Date(),
                tokenData.id
            )

            const recipeDB = new RecipeDatabase()
            await recipeDB.insertRecipe(newRecipe)

            res.status(201).send({ message: 'Recipe created successfully', 'id': id })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    async getRecipeById(req: Request, res: Response) {
        try {
            const id = req.params.id
            const token = req.headers.authorization as string

            if (!id || id === ':id') {
                res.statusCode = 400
                throw new Error('Please provid an id')
            }

            if (!token) {
                res.statusCode = 401
                throw new Error('Please provid a token')
            }

            const authenticator = new Authenticator()
            const tokenData = authenticator.getTokenData(token)

            if (!tokenData) {
                res.statusCode = 401
                throw new Error('Invalid token')
            }

            const recipeDB = new RecipeDatabase()
            const recipe = await recipeDB.selectRecipeById(id)

            if (!recipe) {
                res.statusCode = 404
                throw new Error('Recipe not found')
            }

            recipe.setDate(
                moment(recipe.getCreateAt(), 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY')
            )

            res.status(200).send({ recipe })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }
}


