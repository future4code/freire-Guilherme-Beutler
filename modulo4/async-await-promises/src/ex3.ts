import axios from 'axios';
import { baseURL } from './baseURL';

type user = {
    id: string,
    name: string,
    email: string
}

const getSubscribers = async (): Promise<user[]> => {
    const result = await axios.get(`${baseURL}/subscribers`);
    return result.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        };
    });
};

const main = async () => {
    try {
        const subscribers = await getSubscribers()
        console.log(subscribers)
    } catch (erro: any) {
        console.log(erro.response.data || erro.message)
    }
}
main()