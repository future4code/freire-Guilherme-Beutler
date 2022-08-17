import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { products } from './data';

const app = express();
app.use(express.json());
app.use(cors());
const newListProducts = products;

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003 - [localhost:3003]");
});

app.get('/teste', (req, res) => {
    res.send('Teste funcionando');
});

// --> Exercício 3 <--
app.post('/products', (req, res) => {

    try {
        const { name, price } = req.body;

        const product = {
            id: uuidv4(),
            name: name,
            price: price
        };

        if (!name || !price) {
            throw new Error('Please, check the product information!')
        }
        if (typeof name !== 'string') {
            throw new Error('Please, name must be a string!')
        }
        if (typeof price !== 'number') {
            throw new Error('Please, price must be a number!')
        }
        if (price <= 0) {
            throw new Error('Please, price must have a valid value!')
        }

        newListProducts.push(product)
        return res.send({ newListProducts });

    } catch (error: any) {
        switch (error.message) {
            case 'Please, check the product information!':
                res.status(400).send(error.message)
                break;
            case 'Please, name must be a string!':
                res.status(400).send(error.message)
                break;
            case 'Please, price must be a number!':
                res.status(400).send(error.message)
                break;
            case 'Please, price must have a valid value!':
                res.status(400).send(error.message)
                break;
        }

    }
});


// --> Exercício 4 <--
app.get('/products', (req, res) => {
    const { name } = req.query

    const results = name ?
        newListProducts.filter(product => product.name.includes(name.toLocaleString())) :
        newListProducts

    res.status(200).send({ results });
});

// --> Exercício 5 <--
app.put('/products/:id', (req, res) => {

    try {
        const { id } = req.params;
        const { name, price } = req.body;

        const productIndex = newListProducts.findIndex(product => product.id === id)

        if (productIndex < 0) {
            return res.status(400).send('Error. Product not found!')
        } else {
            const product = {
                id,
                name,
                price
            };

            if (!name || !price) {
                throw new Error('Please, check the product information!')
            }
            if (typeof name !== 'string') {
                throw new Error('Please, name must be a string!')
            }
            if (typeof price !== 'number') {
                throw new Error('Please, price must be a number!')
            }
            if (price <= 0) {
                throw new Error('Please, price must have a valid value!')
            }

            newListProducts[productIndex] = product;
            return res.status(200).send({ newListProducts });
        };

    } catch (error: any) {
        switch (error.message) {
            case 'Please, check the product information!':
                res.status(400).send(error.message)
                break;
            case 'Please, name must be a string!':
                res.status(400).send(error.message)
                break;
            case 'Please, price must be a number!':
                res.status(400).send(error.message)
                break;
            case 'Please, price must have a valid value!':
                res.status(400).send(error.message)
                break;
        }
    }

});

// --> Exercício 6 <--
app.delete('/products/:id', (req, res) => {

    try {
        const { id } = req.params;

        const productIndex = newListProducts.findIndex(product => product.id === id)

        if (productIndex < 0) {
            throw new Error('Error. Product not found!');
        } else {
            newListProducts.splice(productIndex, 1);
            return res.status(200).send(newListProducts);
        };

    } catch (error: any) {
        switch (error.message) {
            case 'Error. Product not found!':
                res.status(400).send(error.message)
                break;
        }
    }
});


