import express, { Express, Request, Response } from 'express';
import { AddressInfo } from 'net';
import cors from 'cors';
import knex from "knex";
import dotenv from "dotenv";
import createUser from './endpoints/createUser';
import getUserById from './endpoints/getUserById';
import editUser from './endpoints/editUser';
import createTask from './endpoints/createTask';
import getTaskById from './endpoints/getTaskById';

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
  },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

app.get('/user/:id', getUserById)
app.get('/task/:id', getTaskById)
app.put('/task', createTask)
app.put('/user', createUser)
app.post('/user/edit/:id', editUser)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});; 
