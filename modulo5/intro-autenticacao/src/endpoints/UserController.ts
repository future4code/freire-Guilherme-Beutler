import { Response, Request } from "express";
import { UserDatabase } from '../data/UserDatabase'
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { GenerataId } from "../services/GenerateId";
import { AuthenticationData } from "../types";



export class UserController {

    async createUser(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                res.statusCode = 400
                throw new Error('Gentileza informar "email" e "senha"')
            }

            const userDB = new UserDatabase()
            const user = await userDB.getUserByEmail(email)

            if (user) {
                res.statusCode = 400
                throw new Error('Usuário já existe!')
            }

            const id = new GenerataId().generateId()

            const newUser = new User(id, email, password)

            await userDB.insertUser(newUser)

            const token = new Authenticator().generateToken({ id })

            res.status(200).send({ message: 'Usuário criado com sucesso!', token })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                res.statusCode = 422
                throw new Error('Gentileza verificar os dados informados')
            }

            const userDB = new UserDatabase()

            const user = await userDB.getUserByEmail(email)

            if (!user) {
                res.statusCode = 400
                throw new Error('Usuário não existe')
            }

            if (user.getPassword() !== password) {
                res.statusCode = 400
                throw new Error('Senha inválida')
            }            

            const token = new Authenticator().generateToken({ id: user!.getId() })

            res.status(200).send({ message: 'Usuário logado', token })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }

    async getUserProfile(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string

            if (!token) {
                res.statusCode = 401
                throw new Error("Não autorizado, token inválido!")
            }

            const authenticator = new Authenticator()

            const tokenData = await authenticator.getTokenData(token) as AuthenticationData

            if (!tokenData) {
                res.statusCode = 401
                throw new Error("Não autorizado, token inválido!")
            }

            const userDB = new UserDatabase()

            const user = await userDB.getUserById(tokenData.id)

            if (!user) {
                res.statusCode = 400
                throw new Error("Usuário não existe")
            }

            res.status(200).send({id: user.getId(), email: user.getEmail()})

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }
}