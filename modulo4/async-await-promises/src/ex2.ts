import axios from 'axios';
import { baseURL } from './baseURL';

const getSubscribers = async (): Promise<any[]> => {
    const result = await axios.get(`${baseURL}/subscribers`);
    return result.data;
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