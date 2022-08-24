import express, { Request, Response } from 'express';
import { AddressInfo } from 'net';
import cors from 'cors';
import { users, user } from './data';


const app = express();
app.use(express.json());
app.use(cors());


// --> Exercício 1 <-- 

app.get("/users", (req: Request, res: Response) => {
    let codeError: number = 400

    try {
        const type: string = req.query.type as string
        const user: user[] | undefined = users.filter((user) => user.type.toLocaleLowerCase() === type.toLocaleLowerCase())
        if (!user) {
            codeError = 404
            throw new Error('Type not found')
        }
        res.status(200).send(user)
    } catch (error: any) {
        res.status(codeError).send({ message: error.message })
    }
})





































const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;