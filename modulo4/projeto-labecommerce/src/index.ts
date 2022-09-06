import express, { Express, Request, Response } from 'express';
import { AddressInfo } from 'net';
import cors from 'cors';
import createUser from './endpoints/createUser';
import getAllUsers from './endpoints/getAllUsers';
import createProduct from './endpoints/createProduct';
import getAllProducts from './endpoints/getAllProducts';
import createPurchases from './endpoints/createPurchases';

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post('/user', createUser)
app.post('/products', createProduct)
app.post('/purchases', createPurchases)
app.get('/users', getAllUsers)
app.get('/products', getAllProducts)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});; 

