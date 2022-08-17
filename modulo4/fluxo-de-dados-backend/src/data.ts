import { v4 as uuidv4 } from 'uuid';

type Product = {
    id: string,
    name: string,
    price: number
}

export const products: Product[] = [
    {
        id: uuidv4(),
        name: 'Placa de vídeo',
        price: 2500
    },
    {
        id: uuidv4(),
        name: 'SSD 256',
        price: 450
    },
    {
        id: uuidv4(),
        name: 'Processador',
        price: 750
    },
]