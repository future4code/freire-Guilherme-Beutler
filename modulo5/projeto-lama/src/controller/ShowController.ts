import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../errors/BaseError";
import { ShowInputDTO } from "../models/Show";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) { }

    public createShow = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const { bandId, starts_at } = req.body

            const newShow: ShowInputDTO = {
                bandId,
                starts_at,
                token
            }

            await this.showBusiness.createShow(newShow)

            res.status(201).send({ message: 'Show criado com sucesso!' })

        } catch (error: any) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado ao cadastrar show" })
        }
    }
}