enum SECTOR {
    MARKETING = 'marketing',
    SALES = 'sales',
    FINANCIAL = 'financial',
}

type People = {
    name: string,
    salary: number,
    sector: SECTOR,
    presential: boolean
}

const listEmployees: People[] = [
    { name: "Marcos", salary: 2500, sector: SECTOR.MARKETING, presential: true },
    { name: "Maria", salary: 1500, sector: SECTOR.SALES, presential: false },
    { name: "Salete", salary: 2200, sector: SECTOR.FINANCIAL, presential: true },
    { name: "João", salary: 2800, sector: SECTOR.MARKETING, presential: false },
    { name: "Josué", salary: 5500, sector: SECTOR.FINANCIAL, presential: true },
    { name: "Natalia", salary: 4700, sector: SECTOR.SALES, presential: true },
    { name: "Paola", salary: 3500, sector: SECTOR.MARKETING, presential: true }
]

const filter = (list: People[]): People[] => {
    const filteredEmployees: People[] = list.filter((employees) => {
        return employees.sector === SECTOR.MARKETING && employees.presential
    })
    return filteredEmployees
}
console.table(filter(listEmployees))