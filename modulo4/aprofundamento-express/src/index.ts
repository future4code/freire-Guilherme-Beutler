import express from 'express';
import cors from 'cors'
import { uuid } from 'uuidv4';

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003 - [localhost:3003]")
})

// --> Exercício 1 <--

app.get('/ping', (req, res) => {
    res.send('pong')
})

// --> Exercício 2 <--
type Todos = {
    userId: string,
    id: string,
    title: string,
    completed: boolean
}

// --> Exercício 3 <--
const tasks: Todos[] = [
    {
        userId: uuid(),
        id: uuid(),
        title: 'Lavar louça',
        completed: false
    },
    {
        userId: uuid(),
        id: uuid(),
        title: 'Varrer casa',
        completed: false
    },
    {
        userId: uuid(),
        id: uuid(),
        title: 'Lavar banheiro',
        completed: true
    }
]

// --> Exercício 4 <--
app.get('/tasks', (req, res) => {
    const tasksList = tasks
    const taskCompleted = req.query.name as String

    if (taskCompleted === true.toString()) {
        const completed = tasksList.filter(task => {
            return task.completed.toString() === taskCompleted
        })
        res.send({ completed })

    } else {
        const notCompleted = tasksList.filter(task => {
            return task.completed.toString() === taskCompleted
        })
        res.send({ notCompleted })
    }
})