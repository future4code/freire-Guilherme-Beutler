import { Request, Response } from 'express'
import updateUser from '../data/updateUser';


export default async function editUser(req: Request, res: Response) {

    const { name, nickname, email } = req.body;
    const { id } = req.params

    try {
        if (name === '' || nickname === '' || email === '') {
            res.status(400).send('Nenhum dos campos pode estar vazio!')
            return
        }

        if (!name && !nickname && !email) {
            res.status(400).send('Escolha algum dado para alterar!')
            return
        }

        await updateUser(id, name, nickname, email)

        res.status(200).send('Usuário atualizado!')

    } catch (error: any) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}