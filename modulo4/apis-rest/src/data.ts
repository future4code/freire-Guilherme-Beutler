
export type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

export enum userType {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL'
}

export let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: userType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: userType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: userType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: userType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: userType.NORMAL,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: userType.ADMIN,
        age: 60
    }
]