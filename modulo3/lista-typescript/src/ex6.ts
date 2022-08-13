type Account = {
    client: string,
    totalBalance: number,
    debit: number[]
}

const clientList = [
    { client: "João", totalBalance: 1000, debit: [100, 200, 300] },
    { client: "Paula", totalBalance: 7500, debit: [200, 1040] },
    { client: "Pedro", totalBalance: 10000, debit: [5140, 6100, 100, 2000] },
    { client: "Luciano", totalBalance: 100, debit: [100, 200, 1700] },
    { client: "Artur", totalBalance: 1800, debit: [200, 300] },
    { client: "Soter", totalBalance: 1200, debit: [] }
]

const negativeCustumers = (list: Account[]): Account[] => {
    list.forEach((custmer) => {
        const totalDebit = custmer.debit.reduce((a, b) => a + b, 0)
        custmer.totalBalance -= totalDebit
        custmer.debit = []
    })
    const accountNegative = list.filter((account) => account.totalBalance < 0)
    return accountNegative
}
console.table(negativeCustumers(clientList))