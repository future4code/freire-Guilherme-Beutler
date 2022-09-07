import { Request, Response } from "express";
import selectByUserId from "../data/selectByUserId";

export default async function getPurchaseByUserId(req: Request, res: Response): Promise<void> {

    try {

        const { userId } = req.params

        const purchases = await selectByUserId(userId)

        if (!purchases) {
            throw new Error('Não existe compra realizada por esse usuário!')
        }

        res.status(200).send(purchases)

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}