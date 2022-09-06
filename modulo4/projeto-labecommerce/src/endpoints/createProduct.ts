import { Request, Response } from "express";
import insertProduct from "../data/insertProduct";
import { inputProduct, ProductDb } from "../types";

export default async function createProduct(req: Request, res: Response) {

    try {

        const { name, price, image_url }: inputProduct = req.body

        if (!name || !price || !image_url) {
            throw new Error("Favor informar, 'nome', 'preço' e 'imagem'!");

        }

        const productInsert: ProductDb = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        }

        const answer = await insertProduct(productInsert)
        
        res.status(201).send({ message: answer })

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}