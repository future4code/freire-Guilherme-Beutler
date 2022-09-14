export type Transaction = {
    value: number,
    date: Date,
    description: string
}


export type Account = {
    id: string,
    name: string,
    cpf: string,
    dateOfBirth: Date,
    balance: number,
    statement: Transaction[]
} 