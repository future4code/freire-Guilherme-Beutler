import { Request, Response } from 'express';
import moment from 'moment';
import insertTask from '../data/insertTask';

export default async function createTask(req: Request, res: Response) {

    const { title, description, deadline, authorId } = req.body
    const dateDiff: number = moment(deadline, 'DD/MM/YYYY').unix() - moment().unix()
    const id: string = Date.now() + Math.random().toString()

    try {
        if (!title || !description || !deadline || !authorId) {
            res.status(400).send('"title", "description", "deadline", "authorId", são obrigatórios.')
            return
        }

        if (dateDiff <= 0) {
            res.status(400).send('"Deadline" deve ser uma data futura!')
            return
        }

        await insertTask(
            id,
            title,
            description,
            moment(deadline, 'DD/MM/YYYY').format('YYYY-MM-DD'),
            authorId
        )

        res.status(201).send({ message: 'Tarefa criada com sucesso!', id, title, deadline })

    } catch (error: any) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}