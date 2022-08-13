type Products = {
    name: string,
    amount: number,
    priceUnit: number | string,
}

const productList = [
    { name: "MacMugffin", amount: 37, priceUnit: 51.040 },
    { name: "Vassoura voadora", amount: 56, priceUnit: 210.0 },
    { name: "Laço da verdade", amount: 32, priceUnit: 571.5 },
    { name: "O precioso", amount: 1, priceUnit: 9181.923 },
    { name: "Caneta de 250 cores", amount: 123, priceUnit: 17 },
    { name: "Plumbus", amount: 13, priceUnit: 140.44 },
    { name: "Pokebola", amount: 200, priceUnit: 99.9915 }
]

const priceReform = (price: number): string => {
    const priceRight: string = price.toFixed(2).replace('.', ',') 
    return 'R$ '+priceRight 
}

const productListCorrection = (list: Products[]): Products[] => {
    list.forEach((item) => (item.priceUnit = priceReform(item.priceUnit as number)))
    const orderList: Products[] = list.sort((a, b) => a.amount - b.amount)
    return orderList
}
console.table(productListCorrection(productList))

