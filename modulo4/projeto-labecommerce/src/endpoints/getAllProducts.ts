import { Request, Response } from "express";
import selectAllProducts from "../data/selectAllProducts";



export default async function getAllUsers(req: Request, res: Response) {

    try {

        const allProducts = await selectAllProducts()

        if (!allProducts?.length) {
            throw new Error('Não existe nenhum produto cadastrado.')
        }

        res.status(200).send(allProducts)

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}