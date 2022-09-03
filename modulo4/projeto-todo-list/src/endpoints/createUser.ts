import { Request, Response } from 'express'
import insertUser from '../data/insertUser';

export default async function createUser(req: Request, res: Response) {

    const { name, nickname, email } = req.body;
    const id: string = Date.now() + Math.random().toString()

    try {
        if (!name || !nickname || !email) {
            res.status(400).send('Os campos "name", "nickname" e "email" devem estar preenchidos')
            return
        }
        await insertUser(id, name, nickname, email)

        res.status(201).send('Usuário criado  com sucesso!')

    } catch (error: any) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}