import axios from 'axios';
import { baseURL } from './baseURL';

type news = {
    title: string,
    content: string,
    date: number
}

const notice: news = {
    title: 'Figurinhas da Copa 2022',
    content: 'Colecionador revela estratégia após encontrar 10 Legends',
    date: Date.now()
}


async function createNews(notice: news): Promise<void> {
    return await axios.put(`${baseURL}/news`, notice);
}

const main = async (): Promise<void> => {
    try {
        const newNotice = await createNews(notice)
        console.log(newNotice)
    } catch (erro: any) {
        console.log(erro.response.data || erro.message)
    }
}
main()