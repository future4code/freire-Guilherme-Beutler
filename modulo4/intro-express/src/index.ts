import express from 'express';
import cors from 'cors'
import { AddressInfo } from "net";

// ---> Exercício 1 <---
const app = express()
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

app.get('/', (req, res) => {
    res.send('O Servidor está funcionando!')
})

// ---> Exercício 5 <---
type Post = {
    id: number,
    title: string,
    body: string,
    userId: any
}

// ---> Exercício 2 <---
type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string,
    post: Post[],
}

// ---> Exercício 3 <---
const users: User[] = [
    {
        id: 1,
        name: 'Margiane',
        phone: 99889991,
        email: 'Margiane@Margiane.com',
        website: 'http://www.Margiane.com.br',
        post: [
            {
                id: 1,
                title: 'First',
                body: 'Primeiro Post',
                userId: 1
            },
            {
                id: 2,
                title: 'Second',
                body: 'Segundo Post',
                userId: 1
            },
        ],
    },
    {
        id: 2,
        name: 'Cecilia',
        phone: 99889992,
        email: 'Cecilia@Cecilia.com',
        website: 'http://www.Cecilia.com.br',
        post: [
            {
                id: 1,
                title: 'Third',
                body: 'Terceiro Post',
                userId: 2
            }
        ]
    },
    {
        id: 3,
        name: 'Naiane',
        phone: 99889993,
        email: 'Naiane@Naiane.com',
        website: 'http://www.Naiane.com.br',
        post: [
            {
                id: 1,
                title: 'Fourth',
                body: 'Quarto Post',
                userId: 3
            }
        ],
    }
]

// ---> Exercício 4 <---
app.get('/users', (req, res) => {

    const allUsers: Object[] = users.map(user => {
        return user.name
    })
    res.status(200).send(allUsers)
})

// ---> Exercício 7 <---
app.get('/posts', (req, res) => {
    const postList = users.map(p => {
        return p.post
    })
    res.status(200).send(postList)
})

// ---> Exercício 8 <---
app.get('/posts/:userId', (req, res) => {
    const { userId } = req.params

    const postListAtt = users.map(user => {
        if (user.id === Number(userId)) {
            return user.post
        } else {
            return undefined
        }
    })

    if (postListAtt != undefined) {
        return res.send(postListAtt)
    } else {
        return res.send("ID inválido")
    }
})

// ---> Exercício 9 <---




