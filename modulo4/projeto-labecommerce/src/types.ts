export type userInput = {
    name: string,
    email: string,
    password: string
}

export type userData = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type inputProduct = {
    name: string,
    price: number,
    image_url: string
}

export type ProductDb = {
    id: string,
    name: string,
    price: number,
    image_url: string
}

export type purchasesData = {
    id: string,
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}