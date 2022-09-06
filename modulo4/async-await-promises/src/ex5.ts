import axios from 'axios';
import { baseURL } from './baseURL';

type user = {
    id: string,
    name: string,
    email: string
}

async function getAllSubscribers(): Promise<user[]> {
    const result = await axios.get(`${baseURL}/subscribers`)
    return result.data;
}

async function getSubscribersIds(subscribers: user[]) {
    return subscribers.map((subscribers) => {
        return subscribers.id
    })
}

async function sendNotifyToSubscribers(ids: string[]): Promise<any> {
    for (let id of ids) {

        try {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: id,
                message: 'Mensagem do react group'
            })
            console.log(`Notify send to ${id}`)
        } catch (error) {
            console.log(`Notify not send to ${id}`)
        }
    }
}

const main = async (): Promise<void> => {
    try {
        const users = await getAllSubscribers()
        const ids = getSubscribersIds(users)
        await sendNotifyToSubscribers(await ids)

    } catch (erro: any) {
        console.log(erro.response?.data || erro.message)
    }
}
console.log(main())