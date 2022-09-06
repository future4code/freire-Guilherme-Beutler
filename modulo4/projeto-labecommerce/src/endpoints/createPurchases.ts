import { Request, Response } from "express";
import insertPurchase from "../data/insertPurchase";
import selectProduct from "../data/selectProduct";
import selectUser from "../data/selectUser";
import { purchasesData } from "../types";

export default async function createPurchases(req: Request, res: Response) {

    try {

        const { userId, productId, quantity } = req.body

        if (!userId || !productId || !quantity) {
            throw new Error('O ID do usuário, ID do produto e quantidade, devem ser informados!')
        }

        const userAlreadyExist = await selectUser(userId)

        if (!userAlreadyExist) {
            throw new Error(`Usuário com id: ${userId}, não foi encontrado`)
        }

        const productAlredyExist = await selectProduct(productId)

        if (!productAlredyExist) {
            throw new Error(`Produto com id: ${userId}, não foi encontrado`)
        }

        const totalPrice = productAlredyExist.price * quantity

        const purchases: purchasesData = {
            id: Date.now().toString(),
            userId,
            productId,
            quantity,
            totalPrice
        }

        const anwser = await insertPurchase(purchases)

        res.status(201).send({ message: anwser })

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}