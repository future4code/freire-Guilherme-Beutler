import express, { Express, Request, Response } from 'express';
import { AddressInfo } from 'net';
import { accounts } from './accounts';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

app.post('/users/create', (req: Request, res: Response) => {
    try {
        const { name, cpf, dateString } = req.body
        const [day, month, year] = dateString.split('/')
        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

        const age: number = (Date.now() - dateOfBirth.getTime()) / 1000 / 60 / 60 / 24 / 365

        if (age < 18) {
            res.statusCode = 406
            throw new Error('Idade deve ser maior que 18 anos!')
        }

        accounts.push({
            id: uuidv4(),
            name,
            cpf,
            dateOfBirth,
            balance: 0,
            statement: []
        })
        res.status(201).send('Conta criada com sucesso!')

    } catch (error: any) {
        console.log(error)
        res.send(error.message)
    }
})

app.get('/users', (req: Request, res: Response) => {
    try {
        if (!accounts.length) {
            res.statusCode = 404
            throw new Error('Nenhuma conta encontrada!')
        }
        res.status(200).send(accounts)
    } catch (error: any) {
        res.send(error.message)
    }
})

app.get('users/balance', (req: Request, res: Response) => {
    try {
        const { name, cpf } = req.body

        if(!name || !cpf) {
            res.statusCode = 422
            throw new Error('Nome e CPF devem ser informados!')
        }


    } catch (error: any) {
        res.send(error.message)
    }
})

