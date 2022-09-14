import { Request, Response } from "express";
import selectAllUsers from "../data/selectAllUsers";

export default async function getAllUsers(req: Request, res: Response) {

    try {

        const allUsers = await selectAllUsers()

        if(!allUsers?.length){
            throw new Error('Não existe nenhum usuário cadastrado.')
        }

        res.status(200).send(allUsers)

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}